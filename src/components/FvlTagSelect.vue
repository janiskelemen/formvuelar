<template>
  <on-click-outside @do="close()">
    <div :class="{ 'fvl-has-error': hasErrors(name), 'fvl-dropdown-is-open': isOpen }" class="fvl-tag-select-wrapper">
      <label v-if="label" :class="labelClass" class="fvl-select-label" @click="toggle()">
        <span v-html="label"></span>
        <slot name="label_suffix" />
      </label>
      <div :class="{ 'fvl-tag-select-input-inline': allowNew }" class="fvl-tag-select-input-wrapper">
        <button
          ref="selectinput"
          :class="[{ 'fvl-tag-select-placeholder': !selectedOptionValues.length }, fieldClass]"
          :disabled="disabled"
          class="fvl-tag-select"
          type="button"
          tabindex="-1"
          @click.prevent="allowNew ? focusInlineInput() : toggle(), allowNew && openOnClick ? open() : ''"
          @keydown.space="toggle()"
        >
          <span v-show="!selectedOptionValues.length && placeholder && !allowNew" v-text="placeholder" />
          <span
            v-for="(value, index) in selectedOptionValues"
            :key="value + index"
            class="fvl-tag-select-item"
            :class="getErrors(name) && getErrors(name)[index] ? 'fvl-tag-select-item-has-error' : ''"
          >
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
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </span>
          <input
            v-if="allowNew && !(max !== null && selected !== null && selected.length >= max)"
            ref="inlineinput"
            v-model="query"
            :style="{
              width: String(query).length * 18 + 'px',
              maxWidth: '100%',
              minWidth: selectedOptionValues.length ? '80px' : String(placeholder).length * 18 + 'px',
            }"
            :class="{ 'p-1': selectedOptionValues.length }"
            :placeholder="selectedOptionValues.length ? '' : placeholder"
            :autocomplete="'new-' + name"
            :type="type"
            class="fvl-tag-inline-input"
            @keydown.esc="close()"
            @keydown="openOnKeyDown($event)"
            @keydown.down="highlightNext()"
            @keydown.up="highlightPrevious()"
            @keydown.enter.prevent="checkValidity($event)"
            @blur="query && !filteredOptionsList.length ? checkValidity($event) : ''"
            @keydown.tab="checkValidity($event), close()"
            @input=";(highlightedIndex = -1), getRemoteOptions()"
            @keydown.backspace="removeTag()"
          />
        </button>
        <div v-if="!allowNew || (allowNew && openOnClick)" class="fvl-search-select-carret">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
        <transition name="fvl-dropdown-transition">
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
              @input=";(highlightedIndex = 0), getRemoteOptions()"
            />
            <ul v-if="!isLoading" ref="options" class="fvl-search-select-dropdown-options">
              <li
                v-for="(option, index) in filteredOptionsList"
                :key="option[optionKey] + '-' + index"
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
                <span v-if="!allowNew" v-text="getConfig('noResultsText', 'No results found!')" />
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
      <slot :errors="getErrors(name)" name="errors">
        <validation-errors :errors="getErrors(name)" />
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
      OnClickOutside,
    },
    mixins: [config],
    props: {
      selected: {
        type: Array,
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
      allowNew: {
        type: Boolean,
        default: false,
      },
      max: {
        type: Number,
        default: null,
      },
      min: {
        type: Number,
        default: null,
      },
      type: {
        type: String,
        default: 'text',
      },
      placeholder: {
        type: String,
        required: false,
        default: '&nbsp;',
      },
      openOnClick: {
        type: Boolean,
        required: false,
        default: false,
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
        let $this = this
        let options = this.searchRemote ? this.remoteOptions : this.optionsList
        /* Hide selected items from options list */
        if (this.selected) {
          options = _filter(options, function (o) {
            return $this.selected.indexOf(o[$this.optionKey]) === -1
          })
        }
        if (!this.query || this.searchRemote) {
          return options
        }

        let fuse = new Fuse(options, {
          threshold: 0.2,
          keys: this.searchKeys,
        })
        return fuse.search(this.query).map((a) => a.item)
      },
      selectedOptionValues() {
        let $this = this
        let options = []
        if (!this.selected) return options
        this.selected.forEach(function (element) {
          let option = _find($this.optionsList, function (o) {
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
        return _findKey(this.optionsList, function (o) {
          return o[$this.optionKey] == $this.selected
        })
      },
    },
    watch: {
      optionsUrl() {
        this.getRemoteOptions(true)
      },
      disabledOptions() {
        this.getRemoteOptions(true)
      },
      filteredOptionsList() {
        if (this.popper !== undefined) {
          this.popper.scheduleUpdate()
        }
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
      getErrors(name) {
        let errors = []
        if (this.selected == '' && this.$parent.getErrors(name).length) {
          errors.push(this.$parent.getErrors(name))
        }
        this.selected?.forEach((item, index) => {
          if (this.$parent.getErrors(name + '.' + index).length) {
            errors.push(this.$parent.getErrors(name + '.' + index))
          }
        })

        return errors
      },
      hasErrors(name) {
        let errors = []
        if (this.selected == '' && this.$parent.getErrors(name).length) {
          return true
        }
        this.selected?.forEach((item, index) => {
          if (this.$parent.getErrors(name + '.' + index).length) {
            errors.push(this.$parent.getErrors(name + '.' + index))
          }
        })
        return errors.length
      },

      select(option) {
        console.log(option)
        if (this.optionIsDisabled(option)) return
        let $this = this
        /* Add the selected option key to selected array */
        let selected = this.selected === null ? [] : this.selected

        if (this.max !== null && selected.length >= this.max) return

        option = typeof option === 'object' ? option[$this.optionKey] : option
        let elementexists = _find(selected, function (o) {
          return o == option
        })
        if (elementexists || (!option && !this.filteredOptionsList.length)) return

        selected.push(option)
        this.$emit('update:selected', selected)
        this.$emit('changed')
        this.$parent.dirty(this.name)

        if (this.allowNew) {
          this.focusInlineInput()
          this.close()
        }
        if (this.max !== null && this.selectedOptionValues.length == this.max) this.close()

        this.reset()
      },
      unselect(option) {
        /* Remove the selected option key from selected array */
        let selected = this.selected === null ? [] : this.selected
        selected.splice(selected.indexOf(option), 1)
        this.$emit('update:selected', selected)
        this.$emit('changed')
        this.$parent.dirty(this.name)
        this.$nextTick(() => {
          if (this.allowNew) this.focusInlineInput()
        })
      },
      removeTag() {
        let selected = this.selected === null ? [] : this.selected
        if (selected && !this.query) {
          this.unselect(selected[selected.length - 1])
          this.close()
        }
        /* Close dropdown*/
        if (this.query && this.query.length == 1) {
          this.close()
        }
        // this.$emit('changed')
      },
      reset() {
        this.query = ''
      },
      selectHighlighted() {
        if (!this.allowNew && !this.filteredOptionsList.length) return
        if (
          this.highlightedIndex === null ||
          this.highlightedIndex < 0 ||
          this.highlightedIndex > this.filteredOptionsList.length - 1
        ) {
          if (this.allowNew && this.query !== null && this.query.trimLeft() != '') this.select(this.query)
          return
        }
        this.select(this.filteredOptionsList[this.highlightedIndex])
        this.highlightedIndex = -1
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
        if (this.max !== null && this.selected !== null && this.selected.length >= this.max) return
        this.isOpen = true
        this.$nextTick(() => {
          this.setupPopper()
          this.allowNew ? this.focusInlineInput() : this.focusSearch()
          this.highlightedIndex = this.selectedOptionIndex ? Number(this.selectedOptionIndex) : null
          this.scrollToIndex(this.highlightedIndex)
        })
      },
      close(reset) {
        reset = typeof reset === 'undefined' ? false : reset
        if (!this.isOpen) return
        this.isOpen = false
        this.$nextTick(() => {
          if (!this.allowNew) {
            this.focusSelectInput()
          }
          if (reset) this.reset()
        })
      },
      focusInlineInput() {
        if (typeof this.$refs.inlineinput !== 'undefined') {
          this.$refs.inlineinput.focus()
        }
      },
      focusSelectInput() {
        if (typeof this.$refs.selectinput !== 'undefined') {
          this.$refs.selectinput.focus()
        }
      },
      focusSearch() {
        if (typeof this.$refs.search !== 'undefined') {
          this.$refs.search.focus()
        }
      },
      preventNative(event) {
        let selected = this.selected === null ? [] : this.selected
        /* Prevent tab if max selected amount has not been reached yet */
        if (this.max !== null && selected.length < this.max && event.keyCode == 9) {
          event.preventDefault()
        }
      },
      openOnKeyDown(event) {
        let ingoreKeys = [9, 13, 27, 16, 91, 18, 17, 20, 8, 38, 40, 37, 39]
        if (ingoreKeys.includes(event.keyCode)) {
          return
        }
        this.open()
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
      checkValidity(event) {
        console.log(event)
        if ((this.highlightedIndex !== null && this.highlightedIndex !== -1) || event.target.checkValidity()) {
          this.selectHighlighted()
        } else {
          event.target.reportValidity()
        }
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

