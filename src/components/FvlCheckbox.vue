<template>
  <div :class="{'fvl-has-error' : this.$parent.hasErrors(name)}" class="fvl-checkbox-wrapper">
    <input
      :name="name"
      :id="id"
      :class="{'checked': checked, fieldClass}"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      type="checkbox"
      class="fvl-checkbox"
      @input="$emit('update:checked', $event.target.checked); $parent.dirty(name);"
    >
    <label v-if="label" :class="labelClass" :for="name" class="fvl-checkbox-label" v-html="label"/>
    <slot name="hint"/>
    <slot :errors="this.$parent.getErrors(name)" name="errors">
      <validation-errors :errors="this.$parent.getErrors(name)"/>
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
        required: false,
        default: null
      },
      checked: {
        type: Boolean,
        default: false
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
    data() {
      return {}
    }
  }
</script>

