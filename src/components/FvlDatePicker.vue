<template>
  <div :class="{ 'fvl-has-error': $parent.hasErrors(name) }" class="fvl-input-wrapper">
    <label v-if="label" :class="labelClass" :for="name" class="fvl-input-label">
      <span v-html="label"></span>
      <slot name="label_suffix" />
    </label>
    <div class="fvl-input-group fvl-date-picker">
      <slot name="prefix" />
      <flat-pickr
        v-model="inputvalue"
        :name="name"
        :placeholder="placeholder"
        :class="['fvl-input', fieldClass]"
        :config="flatpickrConfig"
        :required="required"
        :readonly="readonly"
        :disabled="disabled"
        @on-change="$parent.dirty(name), $emit('changed')"
        @on-close="$emit('closed')"
      />
      <slot name="suffix" />
    </div>
    <slot name="hint" />
    <slot :errors="$parent.getErrors(name)" name="errors">
      <validation-errors :errors="$parent.getErrors(name)" />
    </slot>
  </div>
</template>

<script>
  import ValidationErrors from './FvlErrors.vue'
  import flatPickr from 'vue-flatpickr-component'

  export default {
    components: {
      ValidationErrors,
      flatPickr,
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
        type: String | Array,
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
          }
        },
      },
    },
    data() {
      return {
        inputvalue: this.config.mode == 'range' && this.start && this.end ? this.start + ' - ' + this.end : this.value,
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
    },
    watch: {
      value(newValue, oldValue) {
        if (this.config.mode != 'range' && oldValue != newValue) {
          this.inputvalue = newValue
        }
      },
      inputvalue(newValue, oldValue) {
        let formatedValue
        if (this.config.mode == 'range') {
          let newValueParts = typeof newValue == 'string' ? newValue.split(' - ') : newValue
          formatedValue = { start: newValueParts[0], end: newValueParts[1] }
          this.$emit('update:start', formatedValue.start)
          this.$emit('update:end', formatedValue.end)
          if (oldValue != formatedValue) {
            // console.log(oldValue, formatedValue)
            this.$emit('update:value', formatedValue)
          }
        } else {
          formatedValue = newValue
          this.$emit('update:value', formatedValue)
        }
      },
    },
  }
</script>
