<template>
<on-click-outside @do="close()">
  <div
    :class="{ 'fvl-has-error' : $parent.hasErrors(name), 'fvl-dropdown-is-open' : isOpen }"
    class="fvl-search-select-wrapper"
  >
    <label v-if="label" :class="labelClass" :for="id" class="fvl-select-label" v-html="label"/>
    <div class="fvl-search-select-input-wrapper">
      <input
        ref="selectinput"
        :name="name"
        :id="id"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :class="fieldClass"
        :required="required"
        :disabled="disabled"
        :value="selectedOptionValue"
        readonly
        type="text"
        class="fvl-search-select"
        @click.prevent="toggle()"
        @keydown.space="toggle()"
      >
      <div class="fvl-search-select-carret">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
        </svg>
      </div>
      <transition name="fvl-search-select-dropdown-transition">
        <div v-show="isOpen" class="fvl-search-select-dropdown">
          <input
            ref="search"
            v-model="query"
            class="fvl-search-select-dropdown-input"
            @keydown.esc="close()"
            @keydown.down="highlightNext()"
            @keydown.up="highlightPrevious()"
            @keydown.enter.prevent="selectHighlighted()"
            @keydown.tab.prevent
            @input="highlightedIndex = 0; getRemoteOptions();"
          >
          <ul v-if="!isLoading" ref="options" class="fvl-search-select-dropdown-options">
            <li
              v-for="(option, index) in filteredOptionsList"
              :key="option[optionKey]"
              :class="{ 'fvl-search-select-dropdown-option-highlighted' : index === highlightedIndex}"
              class="fvl-search-select-dropdown-option"
              @click="select(option)"
            >
              <slot :option="option" name="option">
                {{ option[optionValue] }}
              </slot>
            </li>
          </ul>
          <div v-if="!filteredOptionsList.length && !isLoading" class="search-select-empty">
            <slot name="no-results">No results found</slot>
          </div>
          <div v-if="isLoading" class="search-select-empty">
            <slot name="loading">Please wait...</slot>
          </div>
        </div>
      </transition>
    </div>
    <slot name="hint"/>
    <slot :errors="$parent.getErrors(name)" name="errors">
      <validation-errors :errors="$parent.getErrors(name)"/>
    </slot>
  </div>
</on-click-outside>
</template>

<script>
  import axios from 'axios'
  import Fuse from 'fuse.js'
  import _find from 'lodash/find'
  import _findKey from 'lodash/findKey'
  import ValidationErrors from './FvlErrors.vue'
  import OnClickOutside from './utilities/OnClickOutside.vue'
  export default {
    components: {
      ValidationErrors,
      OnClickOutside
    },
    props: {
      selected: {
        type: String,
        default: null
      },
      name: {
        type: String,
        required: true
      },
      id: {
        type: String,
        default: null
      },
      label: {
        type: String,
        default: null
      },
      options: {
        type: Array,
        default: () => []
      },
      optionsUrl: {
        type: String,
        default: null
      },
      lazyLoad: {
        type: Boolean,
        default: false
      },
      optionKey: {
        type: String,
        required: true
      },
      optionValue: {
        type: String,
        required: true
      },
      searchKeys: {
        type: Array,
        required: true,
        default: () => []
      },
      searchRemote: {
        type: Boolean,
        default: false
      },
      allowEmpty: {
        type: Boolean,
        default: true
      },
      placeholder: {
        type: String,
        required: false,
        default: null
      },
      autocomplete: {
        type: String,
        required: false,
        default: null
      },
      fieldClass: {
        type: String,
        required: false,
        default: null
      },
      labelClass: {
        type: String,
        required: false,
        default: ''
      },
      required: {
        type: Boolean,
        required: false,
        default: false
      },
      readonly: {
        type: Boolean,
        required: false,
        default: false
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    data() {
      return {
        isOpen: false,
        query: null,
        highlightedIndex: 0,
        remoteOptions: [],
        isLoading: false
      }
    },
    computed: {
      optionsList(){
        return this.remoteOptions.length ? this.remoteOptions : this.options
      },
      filteredOptionsList() {
        if (!this.query) {
          return this.optionsList
        }
        if(this.searchRemote){
          return this.remoteOptions
        }
        let fuse = new Fuse(this.optionsList, {
          threshold: 0.2,
          keys: this.searchKeys
        })
        return fuse.search(this.query)
      },
      selectedOptionValue() {
        let $this = this
        let option = _find(this.optionsList, function(o) {
          return o[$this.optionKey] == $this.selected
        })
        return option ? option[this.optionValue] : ''
      },
      selectedOptionIndex() {
        let $this = this
        return _findKey(this.optionsList, function(o) {
          return o[$this.optionKey] == $this.selected
        })
      }
    },
    mounted(){
      if(!this.optionsUrl) return
      if(!this.lazyLoad) this.getRemoteOptions()
    },
    methods: {
      select(option) {
        /* Return selected option key */
        this.$emit('update:selected', String(option[this.optionKey]))
        this.$parent.dirty(name)
        this.close()
      },
      reset(){
        this.query = ''
      },
      selectHighlighted() {
        if(!this.filteredOptionsList.length){
          return
        }
        this.select(this.filteredOptionsList[this.highlightedIndex])
      },
      open() {
        if (this.isOpen) return
        if (this.lazyLoad) this.getRemoteOptions()
        this.isOpen = true
        this.$nextTick(() => {
          this.$refs.search.focus()
          this.highlightedIndex = this.selectedOptionIndex ? Number(this.selectedOptionIndex) : 0
          this.scrollToIndex(this.highlightedIndex)
        })
      },
      close() {
        if (!this.isOpen) return
        this.isOpen = false
        this.$nextTick(() => {
          this.$refs.selectinput.focus()
          this.reset()
        })
      },
      toggle() {
        this.isOpen ? this.close() : this.open()
      },
      scrollToIndex(index) {
        if(typeof this.$refs.options == 'undefined' || typeof this.$refs.options.children[index] == 'undefined') return
        this.$refs.options.children[index].scrollIntoView({ block: "nearest" })
      },
      highlightNext() {
        this.highlightedIndex =
          this.highlightedIndex == this.filteredOptionsList.length - 1 ? this.filteredOptionsList.length - 1 : this.highlightedIndex + 1

        this.scrollToIndex(this.highlightedIndex)
      },
      highlightPrevious() {
        this.highlightedIndex = this.highlightedIndex == 0 ? 0 : this.highlightedIndex - 1
        this.scrollToIndex(this.highlightedIndex)
      },
      getRemoteOptions(){
        if((!this.searchRemote && this.optionsList.length) || !this.optionsUrl) return
        let searchQuery = ''
        if(this.query) {
          searchQuery = '?' + this.searchKeys[0] + '=' + this.query
        }
        let $this = this
        this.isLoading = true
        axios({
          method:'get',
          url: this.optionsUrl + searchQuery,
          responseType:'json'
        })
          .then(function (response) {
            $this.remoteOptions = response.data
            $this.$emit('remoteSuccess', response)
          }).catch(function (error) {
            $this.$emit('remoteError', error)
          }).then(function (){
            $this.isLoading = false
          })
      }
    }
  }
</script>

