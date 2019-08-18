<template>
  <div :class="{'fvl-has-error' : $parent.hasErrors(name)}" class="fvl-color-picker-wrapper">
    <label
      v-if="label"
      :class="labelClass"
      :for="name"
      class="fvl-color-picker-label"
      v-html="label"
    />
    <div class="fvl-color-picker-group">
      <slot name="prefix"></slot>
      <div class="fvl-color-picker-container">
        <input
          ref="colorinput"
          :value="value"
          :name="name"
          :id="id"
          :class="fieldClass"
          :required="required"
          :disabled="disabled"
          readonly
          type="text"
          class="fvl-color-picker"
          @click="toggle()"
          @keyup.space="toggle()"
        />
        <div class="fvl-color-preview">
          <span
            :style="{'background': value}"
            class="inline-block rounded-full border border-white h-4 w-4"
          ></span>
        </div>
      </div>
      <slot name="suffix"></slot>
      <div v-show="isOpen" ref="picker" class="fvl-color-picker-dropdown">
        <chrome-picker
          ref="picker"
          :disable-alpha="format == 'hex'"
          :value="value"
          disable-fields
          @input="updateValue"
        ></chrome-picker>
      </div>
    </div>
    <slot name="hint"/>
    <slot :errors="$parent.getErrors(name)" name="errors">
      <validation-errors :errors="$parent.getErrors(name)"/>
    </slot>
  </div>
</template>

<script>
  import { Chrome } from 'vue-color'
  import Popper from 'popper.js'
  import ValidationErrors from './FvlErrors.vue'
  export default {
    components: {
      ValidationErrors,
      'chrome-picker': Chrome
    },
    props: {
      label: {
        type: String,
        required: false,
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
      value: {
        validator: prop => typeof prop === 'string' || prop === null,
        default: '0'
      },
      format: {
        type: String,
        validator: function(value) {
          // The value must match one of these strings
          return ['hex', 'hex8', 'hsl', 'hsv', 'rgba'].indexOf(value) !== -1
        },
        default: 'hex'
      },
      placeholder: {
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
        default: null
      },
      readonly: {
        type: Boolean,
        required: false,
        default: false
      },
      required: {
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
        isOpen: false
      }
    },
    methods: {
      updateValue(e) {
        this.$emit('update:value', e[this.format])
      },
      setupPopper() {
        if (this.popper === undefined) {
          this.popper = new Popper(this.$refs.colorinput, this.$refs.picker, {
            placement: 'bottom'
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
      }
    }
  }
</script>

