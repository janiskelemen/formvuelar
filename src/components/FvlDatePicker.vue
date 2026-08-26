<template>
  <div :class="{ 'fvl-has-error': formHasErrors(name) }" class="fvl-input-wrapper">
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
        @on-change="handleChange"
        @on-close="$emit('closed')"
      />
      <slot name="suffix" />
    </div>
    <slot name="hint" />
    <slot :errors="formGetErrors(name)" name="errors">
      <validation-errors :errors="formGetErrors(name)" />
    </slot>
  </div>
</template>

<script>
  import ValidationErrors from './FvlErrors.vue'
  import flatPickr from 'vue-flatpickr-component'
  import { formControl } from './mixins/formControl'

  export default {
    components: {
      ValidationErrors,
      flatPickr,
    },
    mixins: [formControl],
    emits: ['changed', 'closed', 'update:end', 'update:modelValue', 'update:start'],
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
        type: [String, Array, Object],
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
        inputvalue:
          this.config.mode == 'range' && this.start && this.end
            ? this.start + ' - ' + this.end
            : this.modelValue,
      }
    },
    computed: {
      flatpickrConfig() {
        const config = { ...this.config }
        if (this.config.mode == 'range') {
          config.locale = { ...(config.locale || {}), rangeSeparator: ' - ' }
        }
        return config
      },
    },
    watch: {
      modelValue(newValue, oldValue) {
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
          if (oldValue != formatedValue) this.$emit('update:modelValue', formatedValue)
        } else {
          formatedValue = newValue
          this.$emit('update:modelValue', formatedValue)
        }
      },
    },
    methods: {
      handleChange() {
        this.formDirty(this.name)
        this.$emit('changed')
      },
    },
  }
</script>
