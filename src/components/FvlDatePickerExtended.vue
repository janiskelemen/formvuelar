<template>
  <on-click-outside @do="close()">
    <div :class="{ 'fvl-has-error': $parent.hasErrors(name) }" class="fvl-input-wrapper">
      <label v-if="label" :class="labelClass" :for="name" class="fvl-input-label">
        <span v-html="label"></span>
        <slot name="label_suffix" />
      </label>
      <div class="fvl-input-group" @click="isOpen = true">
        <slot name="prefix" />
        <input
          ref="dateinput"
          :value="inputvalue"
          :class="['fvl-input cursor-pointer', fieldClass]"
          :required="required"
          readonly="readonly"
          :disabled="disabled"
          :placeholder="placeholder"
          @click.prevent="toggle()"
          @keydown.space="toggle()"
          @keydown.esc="close()"
        />
        <slot name="suffix" />
      </div>

      <transition name="fvl-dropdown-transition">
        <div v-show="isOpen" ref="datedropdown" class="fvl-date-picker" :style="{ 'max-width': width }">
          <div class="fvl-date-picker-extended-wrapper">
            <div class="flex-grow pr-3">
              <button
                v-for="preset in datePresets"
                :key="preset.name"
                class="fvl-date-picker-extended-preset-item"
                :class="{
                  'fvl-date-picker-extended-preset-item-active': inputvalue == preset.start + ' - ' + preset.end,
                }"
                type="button"
                @click="inputvalue = preset.start + ' - ' + preset.end"
                @keydown.esc="close()"
              >
                {{ preset.name }}
              </button>
            </div>

            <div class="fvl-date-picker-extended-flatpickr-wrapper">
              <flat-pickr
                ref="flatpickr"
                v-model="inputvalue"
                :name="name"
                :placeholder="placeholder"
                :class="['hidden', fieldClass]"
                :config="flatpickrConfig"
                @on-change="$parent.dirty(name), $emit('changed')"
              />
            </div>
          </div>
        </div>
      </transition>
      <slot name="hint" />
      <slot :errors="$parent.getErrors(name)" name="errors">
        <validation-errors :errors="$parent.getErrors(name)" />
      </slot>
    </div>
  </on-click-outside>
</template>

<script>
  import Popper from 'popper.js'
  import OnClickOutside from './utilities/OnClickOutside.vue'
  import ValidationErrors from './FvlErrors.vue'
  import flatPickr from 'vue-flatpickr-component'
  export default {
    components: {
      ValidationErrors,
      flatPickr,
      OnClickOutside,
    },
    props: {
      label: {
        type: String,
        required: false,
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
      value: {
        type: String | Array | Object,
        default: '',
      },
      start: {
        type: String,
        required: false,
        default: null,
      },
      end: {
        type: String,
        required: false,
        default: null,
      },
      type: {
        type: String,
        default: 'text',
      },
      placeholder: {
        type: String,
        required: false,
        default: null,
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
        default: null,
      },
      readonly: {
        type: Boolean,
        required: false,
        default: false,
      },
      required: {
        type: Boolean,
        required: false,
        default: false,
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
      config: {
        type: Object,
        required: false,
        default: () => {
          return {
            dateFormat: 'Y-m-d',
            mode: 'range',
            inline: true,
          }
        },
      },
      presets: {
        type: Array,
        required: false,
        default: () => [],
      },
      width: {
        type: String,
        required: false,
        default: null,
      },
    },
    data() {
      return {
        isOpen: false,
        inputvalue: this.start && this.end ? this.start + ' - ' + this.end : this.value,
      }
    },
    computed: {
      flatpickrConfig() {
        let config = this.config
        /* Change range seperator */
        if (this.config.mode == 'range' && config.locale) {
          config.locale.rangeSeparator = ' - '
        }
        if (this.config.mode == 'range' && !config.locale) {
          config.locale = { rangeSeparator: ' - ' }
        }
        return config
      },
      datePresets() {
        if (this.presets.length) {
          return this.presets
        }
        return [
          { name: 'Last 30 Days', start: this.getRange(30).start, end: this.getRange(30).end },
          { name: 'Last 60 Days', start: this.getRange(60).start, end: this.getRange(60).end },
          { name: 'Last 90 Days', start: this.getRange(90).start, end: this.getRange(90).end },
          { name: 'Last 365 Days', start: this.getRange(365).start, end: this.getRange(365).end },
        ]
      },
    },
    watch: {
      value(newValue) {
        if (this.config.mode != 'range') {
          this.inputvalue = newValue
        }
      },
      inputvalue(newValue) {
        let formatedValue
        if (this.config.mode == 'range' && typeof newValue == 'string') {
          newValue = newValue.split(' - ')
          formatedValue = { start: newValue[0], end: newValue[1] }
          this.$emit('update:start', newValue[0])
          this.$emit('update:end', newValue[1])
        } else {
          formatedValue = newValue
        }
        this.$emit('update:value', formatedValue)
      },
    },
    beforeDestroy() {
      if (this.popper !== undefined) {
        this.popper.destroy()
      }
    },
    methods: {
      setupPopper() {
        if (this.popper === undefined) {
          this.popper = new Popper(this.$refs.dateinput, this.$refs.datedropdown, {
            placement: 'bottom',
          })
        } else {
          this.popper.scheduleUpdate()
        }
      },
      open() {
        if (this.isOpen) return
        this.isOpen = true
        this.$nextTick(() => {
          this.setupPopper()
          // this.$refs.search.focus()
        })
      },
      close() {
        if (!this.isOpen) return
        this.isOpen = false
        if (this.value && typeof this.value.end == 'undefined') {
          this.inputvalue = ''
          this.$emit('closed')
          this.$emit('update:value', '')
          this.$emit('update:start', '')
          this.$emit('update:end', '')
        }
        this.$nextTick(() => {
          this.$refs.dateinput.focus()
        })
      },
      toggle() {
        if (this.disabled) return
        this.isOpen ? this.close() : this.open()
      },
      getRange(days) {
        let now = new Date()
        let end = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate()}`
        let d = new Date(now.setDate(now.getDate() - days))
        let start = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, '0')}-${d.getDate()}`
        return { start: start, end: end }
      },
    },
  }
</script>
