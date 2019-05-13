<template>
  <div :class="{'fvl-has-error' : $parent.hasErrors(name)}" class="fvl-switch-wrapper">
    <input
      :name="name"
      :id="id ? id : name"
      :class="{'checked': checked, fieldClass}"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      :checked="checked"
      type="checkbox"
      class="fvl-switch"
      @change="$emit('update:checked', $event.target.checked); $parent.dirty(name);"
    >
    <label v-if="label" :class="labelClass" :for="id ? id : name" class="fvl-switch-label">
      <span class="fvl-switch-toggle"/>
      {{ label }}
    </label>
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
    }
  }
</script>

