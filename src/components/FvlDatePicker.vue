<template>
  <div :class="{'fvl-has-error' : $parent.hasErrors(name)}" class="fvl-input-wrapper">
    <label v-if="label" :class="labelClass" :for="name" class="fvl-input-label" v-html="label" />
    <div class="fvl-input-group fvl-date-picker">
      <slot name="prefix" />
      <flat-pickr
        :name="name"
        :placeholder="placeholder"
        :class="['fvl-input', fieldClass]"
        v-model="inputvalue"
        @on-change="$parent.dirty(name); $emit('changed');"
        :config="flatpickrConfig"
        :required="required"
        :readonly="readonly"
        :disabled="disabled"
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
      flatPickr
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
        type: String | Array,
        default: ''
      },
      start: {
        type: String,
        required: false,
        default: null
      },
      end: {
        type: String,
        required: false,
        default: null
      },
      type: {
        type: String,
        default: 'text'
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
      },
      config: {
        type: Object,
        required: false,
        default: () => {
          return {
            dateFormat: 'Y-m-d'
          }
        }
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
      }
    },
    watch: {
      inputvalue(newValue) {
        let formatedValue
        if (this.config.mode == 'range') {
          newValue = newValue.split(' - ')
          formatedValue = { start: newValue[0], end: newValue[1] }
          this.$emit('update:start', newValue[0])
          this.$emit('update:end', newValue[1])
        } else {
          formatedValue = newValue
        }
        this.$emit('update:value', formatedValue)
      }
    },
    data() {
      return {
        inputvalue: this.config.mode == 'range' && this.start && this.end ? this.start + ' - ' + this.end : this.value
      }
    }
  }
</script>
