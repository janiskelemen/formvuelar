<template>
  <div :class="{'fvl-has-error' : $parent.hasErrors(name)}" class="fvl-radio-wrapper">
    <span class="fvl-radio-group-label" v-html="label"></span>
    <div v-for="(option, key) in options" :key="key" class="fvl-radio-group">
      <input
        :name="name"
        :id="id"
        :value="key"
        :checked="checked == key"
        :class="fieldClass"
        :required="required"
        :readonly="readonly"
        :disabled="disabled"
        type="radio"
        class="fvl-radio"
        @change="$emit('update:checked', $event.target.value); $parent.dirty(name);"
      >
      <label :class="labelClass" :for="key" class="fvl-radio-label" v-html="option"/>
    </div>
    <slot name="hint"/>
    <slot :errors="$parent.getErrors(name)" name="errors">
      <validation-errors :errors="$parent.getErrors(name)"/>
    </slot>
  </div>
</template>

<script>
  import ValidationErrors from './FvlErrors.vue'
  export default {
    components: {
      ValidationErrors
    },
    props: {
      checked: {
        type: String,
        default: ''
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
        type: Object,
        required: true,
        default: () => {}
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
    computed: {
      errors() {
        return this.$parent.errors[this.name] ? this.$parent.errors[this.name] : false
      },
      hasError() {
        return this.$parent.errors[this.name] ? 'fvl-has-error' : ''
      }
    }
  }
</script>

