<template>
  <on-click-outside @do="close()">
    <div
      :class="{ 'fvl-has-error' : $parent.hasErrors(name), 'fvl-dropdown-is-open' : isOpen }"
      class="fvl-tag-select-wrapper"
    >
      <label
        v-if="label"
        :class="labelClass"
        class="fvl-select-label"
        @click="toggle()"
        v-html="label"
      />
      <div :class="{'fvl-tag-select-input-inline': allowNew}" class="fvl-tag-select-input-wrapper">
        <button
          ref="selectinput"
          :class="[{ 'fvl-tag-select-placeholder': !selectedOptionValues.length}, fieldClass]"
          :disabled="disabled"
          class="fvl-tag-select"
          @click.prevent="allowNew ? open() : toggle()"
          @keydown.space="toggle()"
        >
          <span
            v-show="!selectedOptionValues.length && placeholder && !allowNew"
            v-text="placeholder"
          />
          <span v-for="value in selectedOptionValues" :key="value" class="fvl-tag-select-item">
            {{ value }}
            <svg
              class="fvl-tag-select-item-remove"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              @click.prevent.stop="unselect(value)"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </span>
          <input
            v-if="allowNew"
            ref="inlineinput"
            v-model="query"
            :style="{ width: String(query).length*18 + 'px', 
                      maxWidth: '100%', 
                      minWidth: selectedOptionValues.length ? '80px' : String(placeholder).length*18 + 'px'
                    }"
            :class="{'p-1': selectedOptionValues.length}"
            :placeholder="selectedOptionValues.length ? '' : placeholder"
            type="text"
            class="fvl-tag-inline-input"
            @keydown.esc="close()"
            @keydown.down="highlightNext()"
            @keydown.up="highlightPrevious()"
            @keydown.enter.prevent="selectHighlighted()"
            @keydown.tab="close()"
            @input="highlightedIndex = -1; getRemoteOptions();"
            @keydown.backspace="removeTag()"
          >
        </button>
        <div class="fvl-search-select-carret">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
          </svg>
        </div>
        <transition name="fvl-search-select-dropdown-transition">
          <div
            v-show="(isOpen && !allowNew) || (isOpen && allowNew && filteredOptionsList.length)"
            ref="selectdropdown"
            class="fvl-search-select-dropdown"
          >
            <input
              v-if="!allowNew"
              ref="search"
              v-model="query"
              type="text"
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
                <slot :option="option" name="option">{{ option[optionValue] }}</slot>
              </li>
            </ul>
            <div v-if="!filteredOptionsList.length && !isLoading" class="search-select-empty">
              <slot name="no-results">
                <span v-if="!allowNew" v-text="getConfig('noResultsText', 'No results found!')"/>
              </slot>
            </div>
            <div v-if="isLoading" class="search-select-empty">
              <slot name="loading">
                <span v-text="getConfig('pleaseWaitText', 'Please wait...')"/>
              </slot>
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
  import Popper from 'popper.js'
  import _find from 'lodash/find'
  import _findKey from 'lodash/findKey'
  import _get from 'lodash/get'
  import _filter from 'lodash/filter'
  import ValidationErrors from './FvlErrors.vue'
  import OnClickOutside from './utilities/OnClickOutside.vue'
  import { config } from './mixins/config'
  export default {
    components: {
      ValidationErrors,
      OnClickOutside
    },
    mixins: [config],
    props: {
      selected: {
        type: Array,
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
      responseDataPath: {
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
      allowNew: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        required: false,
        default: '&nbsp;'
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
      optionsList() {
        return this.remoteOptions.length ? this.remoteOptions : this.options
      },
      filteredOptionsList() {
        let $this = this
        let options = this.searchRemote ? this.remoteOptions : this.optionsList
        /* Hide selected items from options list */
        if (this.selected) {
          options = _filter(options, function(o) {
            return $this.selected.indexOf(o[$this.optionKey]) === -1
          })
        }
        if (!this.query || this.searchRemote) {
          return options
        }

        let fuse = new Fuse(options, {
          threshold: 0.2,
          keys: this.searchKeys
        })
        return fuse.search(this.query)
      },
      selectedOptionValues() {
        let $this = this
        let options = []
        if (!this.selected) return options
        this.selected.forEach(function(element) {
          let option = _find($this.optionsList, function(o) {
            return o[$this.optionKey] == element
          })
          if (option) {
            options.push(option[$this.optionValue])
          }
          if (!option && $this.allowNew) {
            options.push(element)
          }
        })
        return options
      },
      selectedOptionIndex() {
        let $this = this
        return _findKey(this.optionsList, function(o) {
          return o[$this.optionKey] == $this.selected
        })
      }
    },
    watch: {
      filteredOptionsList() {
        if (this.popper !== undefined) {
          this.popper.scheduleUpdate()
        }
      }
    },
    mounted() {
      if (!this.optionsUrl) return
      if (!this.lazyLoad) this.getRemoteOptions()
    },
    beforeDestroy() {
      if (this.popper !== undefined) {
        this.popper.destroy()
      }
    },
    methods: {
      select(option) {
        let $this = this
        /* Add the selected option key to selected array */
        let selected = this.selected === null ? [] : this.selected
        option = typeof option === 'object' ? option[$this.optionKey] : option
        let elementexists = _find(selected, function(o) {
          return o == option
        })
        if (elementexists || (!option && !this.filteredOptionsList.length)) return

        selected.push(option)
        this.$emit('update:selected', selected)
        this.$parent.dirty(this.name)
        if(this.allowNew) this.$refs.inlineinput.focus()
        this.reset()
      },
      unselect(option) {
        /* Remove the selected option key from selected array */
        let selected = this.selected === null ? [] : this.selected
        selected.splice(selected.indexOf(option), 1)
        this.$emit('update:selected', selected)
        this.$parent.dirty(this.name)
        if(this.allowNew) this.$refs.inlineinput.focus()
      },
      removeTag() {
        if (this.selected && !this.query) {
          this.selected.splice(this.selected.length - 1, 1)
        }
      },
      reset() {
        this.query = ''
      },
      selectHighlighted() {
        if (!this.allowNew && !this.filteredOptionsList.length) return
        if (this.highlightedIndex < 0 || this.highlightedIndex > this.filteredOptionsList.length - 1) {
          if (this.allowNew && this.query) this.select(this.query)
          return
        }
        this.select(this.filteredOptionsList[this.highlightedIndex])
      },
      setupPopper() {
        if (this.popper === undefined) {
          this.popper = new Popper(this.$refs.selectinput, this.$refs.selectdropdown, {
            placement: 'bottom'
          })
        } else {
          this.popper.scheduleUpdate()
        }
      },
      open() {
        if (this.isOpen) return
        if (this.lazyLoad) this.getRemoteOptions()
        this.isOpen = true
        this.$nextTick(() => {
          this.setupPopper()
          this.allowNew ? this.$refs.inlineinput.focus() : this.$refs.search.focus()
          this.highlightedIndex = this.selectedOptionIndex ? Number(this.selectedOptionIndex) : 0
          this.scrollToIndex(this.highlightedIndex)
        })
      },
      close() {
        if (!this.isOpen) return
        this.isOpen = false
        this.$nextTick(() => {
          if(!this.allowNew) this.$refs.selectinput.focus()
          this.reset()
        })
      },
      toggle() {
        if (this.disabled || this.readonly) return
        this.isOpen ? this.close() : this.open()
      },
      scrollToIndex(index) {
        if (typeof this.$refs.options == 'undefined' || typeof this.$refs.options.children[index] == 'undefined') return
        this.$refs.options.children[index].scrollIntoView({ block: 'nearest' })
      },
      highlightNext() {
        this.highlightedIndex =
          this.highlightedIndex >= this.filteredOptionsList.length - 1
            ? this.filteredOptionsList.length - 1
            : this.highlightedIndex + 1

        this.scrollToIndex(this.highlightedIndex)
      },
      highlightPrevious() {
        this.highlightedIndex = this.highlightedIndex <= 0 ? 0 : this.highlightedIndex - 1
        this.scrollToIndex(this.highlightedIndex)
      },
      getRemoteOptions() {
        if ((!this.searchRemote && this.optionsList.length) || !this.optionsUrl) return
        let searchQuery = ''
        if (this.query) {
          searchQuery = '?' + this.searchKeys[0] + '=' + this.query
        }
        let $this = this
        this.isLoading = true
        axios({
          method: 'get',
          url: this.optionsUrl + searchQuery,
          responseType: 'json'
        })
          .then(function(response) {
            $this.remoteOptions = $this.responseDataPath ? _get(response.data, $this.responseDataPath) : response.data
            $this.$emit('remoteSuccess', response)
          })
          .catch(function(error) {
            $this.$emit('remoteError', error)
          })
          .then(function() {
            $this.isLoading = false
            if ($this.popper) {
              $this.popper.scheduleUpdate()
            }
          })
      }
    }
  }
</script>

