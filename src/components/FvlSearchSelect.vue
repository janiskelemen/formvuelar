<template>
  <on-click-outside @do="close()">
    <div
      :class="{ 'fvl-has-error': $parent.hasErrors(name), 'fvl-dropdown-is-open': isOpen }"
      class="fvl-search-select-wrapper"
    >
      <label v-if="label" :class="labelClass" class="fvl-select-label" @click="toggle()">
        <span v-html="label"></span>
        <slot name="label_suffix" />
      </label>
      <div class="fvl-search-select-input-wrapper">
        <button
          ref="selectinput"
          :class="[{ 'fvl-search-select-placeholder': !selectedOptionValue }, fieldClass]"
          :disabled="disabled"
          class="fvl-search-select"
          type="button"
          @click.prevent="toggle()"
          @keydown.space="toggle()"
          @keydown.esc="close()"
          v-html="selectedOptionValue ? selectedOptionValue : placeholder"
        />
        <div class="fvl-search-select-carret">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
        <transition name="fvl-dropdown-transition">
          <div v-show="isOpen" ref="selectdropdown" class="fvl-search-select-dropdown">
            <input
              ref="search"
              v-model="query"
              class="fvl-search-select-dropdown-input"
              @keydown.esc="close()"
              @keydown.down="highlightNext()"
              @keydown.up="highlightPrevious()"
              @keydown.enter.prevent="selectHighlighted()"
              @keydown.tab.prevent
              @input=";(highlightedIndex = 0), getRemoteOptions()"
            />
            <ul v-if="!isLoading" ref="options" class="fvl-search-select-dropdown-options">
              <li
                v-for="(option, index) in filteredOptionsList"
                :key="option[optionKey]"
                :class="{
                  'fvl-search-select-dropdown-option-highlighted': index === highlightedIndex,
                  'fvl-search-dropdown-option-disabled': optionIsDisabled(option),
                }"
                class="fvl-search-select-dropdown-option"
                @click="select(option)"
              >
                <slot :option="option" :disabled="optionIsDisabled(option)" name="option">
                  {{ option[optionValue] }}
                </slot>
              </li>
            </ul>
            <div v-if="!filteredOptionsList.length && !isLoading" class="search-select-empty">
              <slot name="no-results">
                <span v-text="getConfig('noResultsText', 'No results found!')" />
              </slot>
            </div>
            <div v-if="isLoading" class="search-select-empty">
              <slot name="loading">
                <span v-text="getConfig('pleaseWaitText', 'Please wait...')" />
              </slot>
            </div>
          </div>
        </transition>
      </div>
      <slot name="hint" />
      <slot :errors="$parent.getErrors(name)" name="errors">
        <validation-errors :errors="$parent.getErrors(name)" />
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
  import ValidationErrors from './FvlErrors.vue'
  import OnClickOutside from './utilities/OnClickOutside.vue'
  import { config } from './mixins/config'
  export default {
    components: {
      ValidationErrors,
      OnClickOutside,
    },
    mixins: [config],
    props: {
      selected: {
        type: String | Number,
        default: null,
      },
      name: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        default: null,
      },
      label: {
        type: String,
        default: null,
      },
      options: {
        type: Array,
        default: () => [],
      },
      disabledOptions: {
        type: Array,
        default: () => [],
      },
      optionsUrl: {
        type: String,
        default: null,
      },
      responseDataPath: {
        type: String,
        default: null,
      },
      lazyLoad: {
        type: Boolean,
        default: false,
      },
      optionKey: {
        type: String,
        required: true,
      },
      optionValue: {
        type: String,
        required: true,
      },
      searchKeys: {
        type: Array,
        required: true,
        default: () => [],
      },
      searchRemote: {
        type: Boolean,
        default: false,
      },
      allowEmpty: {
        type: Boolean,
        default: true,
      },
      placeholder: {
        type: String,
        required: false,
        default: '&nbsp;',
      },
      autocomplete: {
        type: String,
        required: false,
        default: null,
      },
      fieldClass: {
        type: String,
        required: false,
        default: null,
      },
      labelClass: {
        type: String,
        required: false,
        default: '',
      },
      required: {
        type: Boolean,
        required: false,
        default: false,
      },
      readonly: {
        type: Boolean,
        required: false,
        default: false,
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
      selectFirst: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    data() {
      return {
        isOpen: false,
        query: null,
        highlightedIndex: 0,
        remoteOptions: [],
        isLoading: false,
      }
    },
    computed: {
      optionsList() {
        return this.remoteOptions.length ? this.remoteOptions : this.options
      },
      filteredOptionsList() {
        if (!this.query) {
          return this.optionsList
        }
        if (this.searchRemote) {
          return this.remoteOptions
        }
        let fuse = new Fuse(this.optionsList, {
          threshold: 0.2,
          keys: this.searchKeys,
        })
        return fuse.search(this.query).map((a) => a.item)
      },
      selectedOptionValue() {
        let $this = this
        let option = _find(this.optionsList, function (o) {
          return o[$this.optionKey] == $this.selected
        })
        return option ? option[this.optionValue] : ''
      },
      selectedOptionIndex() {
        let $this = this
        return _findKey(this.optionsList, function (o) {
          return o[$this.optionKey] == $this.selected
        })
      },
    },
    watch: {
      filteredOptionsList() {
        if (this.popper !== undefined) {
          this.popper.scheduleUpdate()
        }
      },
      optionsUrl() {
        this.getRemoteOptions(true)
      },
      disabledOptions() {
        this.getRemoteOptions(true)
      },
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
        /* Return selected option key */
        if (this.optionIsDisabled(option)) return
        this.$emit('update:selected', String(option[this.optionKey]))
        this.$emit('changed')
        this.$parent.dirty(this.name)
        this.close()
      },
      reset() {
        this.query = ''
      },
      selectHighlighted() {
        if (!this.filteredOptionsList.length) {
          return
        }
        this.select(this.filteredOptionsList[this.highlightedIndex])
      },
      setupPopper() {
        if (this.popper === undefined) {
          this.popper = new Popper(this.$refs.selectinput, this.$refs.selectdropdown, {
            placement: 'bottom',
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
        if (this.disabled || this.readonly) return
        this.isOpen ? this.close() : this.open()
      },
      scrollToIndex(index) {
        if (typeof this.$refs.options == 'undefined' || typeof this.$refs.options.children[index] == 'undefined') return
        this.$refs.options.children[index].scrollIntoView({ block: 'nearest' })
      },
      highlightNext() {
        this.highlightedIndex =
          this.highlightedIndex == this.filteredOptionsList.length - 1
            ? this.filteredOptionsList.length - 1
            : this.highlightedIndex + 1

        this.scrollToIndex(this.highlightedIndex)
      },
      highlightPrevious() {
        this.highlightedIndex = this.highlightedIndex == 0 ? 0 : this.highlightedIndex - 1
        this.scrollToIndex(this.highlightedIndex)
      },
      getRemoteOptions(refresh) {
        if ((!this.searchRemote && this.optionsList.length && !refresh) || !this.optionsUrl) return
        let searchQuery = ''
        if (this.query) {
          searchQuery = '?' + this.searchKeys[0] + '=' + this.query
        }
        let $this = this
        this.isLoading = true
        axios({
          method: 'get',
          url: this.optionsUrl + searchQuery,
          responseType: 'json',
        })
          .then(function (response) {
            $this.remoteOptions = $this.responseDataPath ? _get(response.data, $this.responseDataPath) : response.data
            if ($this.selectFirst && !$this.selectedOptionValue && !$this.lazyLoad) {
              $this.select($this.remoteOptions[0])
            }
            $this.$emit('remoteSuccess', response)
          })
          .catch(function (error) {
            $this.$emit('remoteError', error)
          })
          .then(function () {
            $this.isLoading = false
            if ($this.popper) {
              $this.popper.scheduleUpdate()
            }
          })
      },
      optionIsDisabled(option) {
        if (this.disabledOptions === null) return false
        /* check if whole object is in disabled options list */
        if (this.disabledOptions.length && typeof this.disabledOptions[0] === 'object') {
          let disabledOptions = JSON.parse(JSON.stringify(this.disabledOptions))
          return typeof _find(disabledOptions, JSON.parse(JSON.stringify(option))) !== 'undefined'
        }
        /* check if option key is in disabled options list */
        return this.disabledOptions.includes(option[this.optionKey])
      },
    },
  }
</script>

