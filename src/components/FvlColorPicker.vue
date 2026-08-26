<template>
  <on-click-outside @do="close()">
    <div :class="{ 'fvl-has-error': formHasErrors(name) }" class="fvl-color-picker-wrapper">
      <label v-if="label" :class="labelClass" :for="name" class="fvl-color-picker-label">
        <span v-html="label"></span>
        <slot name="label_suffix" />
      </label>
      <div class="fvl-color-picker-group" :class="fieldClass">
        <slot name="prefix"></slot>
        <div class="fvl-color-picker-container">
          <input
            :id="id"
            ref="colorinput"
            autocapitalize="off"
            spellcheck="false"
            :value="modelValue"
            :name="name"
            :required="required"
            :disabled="disabled"
            :readonly="readonly"
            type="text"
            class="fvl-color-picker"
            :pattern="validateFormat ? pattern : null"
            @keyup.space="toggle()"
            @change="updateValueManually($event.target.value)"
            @input="formDirty(name)"
          />
          <div ref="colorpicker" class="fvl-color-preview" @click="toggle()">
            <span :style="{ background: modelValue }" class="inline-block rounded-full border border-white h-4 w-4"></span>
          </div>
        </div>
        <slot name="suffix"></slot>
        <div v-show="isOpen" ref="picker" class="fvl-color-picker-dropdown">
          <chrome-picker
            ref="picker"
            :disable-alpha="format == 'hex'"
            :model-value="modelValue"
            disable-fields
            @update:model-value="updateValue"
          ></chrome-picker>
        </div>
      </div>
      <slot name="hint" />
      <slot :errors="formGetErrors(name)" name="errors">
        <validation-errors :errors="formGetErrors(name)" />
      </slot>
    </div>
  </on-click-outside>
</template>

<script>
  import { ChromePicker } from 'vue-color'
  import 'vue-color/style.css'
  import Popper from 'popper.js'
  import ValidationErrors from './FvlErrors.vue'
  import { formControl } from './mixins/formControl'
  import OnClickOutside from './utilities/OnClickOutside.vue'
  export default {
    components: {
      OnClickOutside,
      ValidationErrors,
      'chrome-picker': ChromePicker,
    },
    mixins: [formControl],
    emits: ['changed', 'update:modelValue'],
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
      modelValue: {
        validator: (prop) => typeof prop === 'string' || prop === null,
        default: null,
      },
      format: {
        type: String,
        validator: function (value) {
          // The value must match one of these strings
          return ['hex', 'hex8', 'hsl', 'hsv', 'rgba', 'linearGradient', 'radialGradient'].indexOf(value) !== -1
        },
        default: 'hex',
      },
      placeholder: {
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
      validateFormat: {
        type: Boolean,
        required: false,
        default: true,
      },
    },
    data() {
      return {
        isOpen: false,
        patterns: {
          hex: `(?:#[a-fA-F\\d]{3}(?:[a-fA-F\\d]{3}|[a-fA-F\\d]{5})?|(?:linear|radial)-gradient\\(.+\\))`,
          linearGradient: `linear-gradient\\(.+\\)`,
          radialGradient: `radial-gradient\\(.+\\)`,
          hex8: `#[a-fA-F\\d]{8}`,
          hsl: `[Hh][Ss][Ll]\\(.+\\)`,
          hsla: `[Hh][Ss][Ll][Aa]\\(.+\\)`,
          hsv: `[Hh][Ss][Vv]\\(.+\\)`,
          rgb: `[Rr][Gg][Bb]\\(.+\\)`,
          rgba: `[Rr][Gg][Bb][Aa]\\(.+\\)`,
        },
      }
    },
    computed: {
      pattern() {
        return this.patterns[this.format]
      },
    },
    methods: {
      updateValue(e) {
        const value = e && typeof e === 'object' && this.format in e ? e[this.format] : e
        this.$emit('update:modelValue', value)
        this.$emit('changed')
        this.formDirty(this.name)
      },
      updateValueManually(e) {
        this.$emit('update:modelValue', e)
        this.$emit('changed')
        this.formDirty(this.name)
      },
      setupPopper() {
        if (this.popper === undefined) {
          this.popper = new Popper(this.$refs.colorpicker, this.$refs.picker, {
            placement: 'bottom-end',
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
        })
      },
      close() {
        if (!this.isOpen) return
        this.isOpen = false
        this.$nextTick(() => {
          this.$refs.colorinput.focus()
        })
      },
      toggle() {
        if (this.disabled) return
        this.isOpen ? this.close() : this.open()
      },
    },
    beforeUnmount() {
      if (this.popper !== undefined) {
        this.popper.destroy()
      }
    },
  }
</script>
