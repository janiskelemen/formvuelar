<template>
  <div :class="{'fvl-has-error' : $parent.hasErrors(name)}" class="fvl-input-wrapper">
    <label v-if="label" :class="labelClass" :for="name" class="fvl-input-label" v-html="label"/>
    <input
      :value="value"
      :name="name"
      :id="name"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :class="fieldClass"
      :min="min"
      :max="max"
      :size="size"
      :step="step"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      :pattern="pattern"
      class="fvl-input"
      @change="$parent.dirty(name)"
      @input="$emit('update:value', $event.target.value)"
    >
    <slot name="hint"/>
    <slot :errors="$parent.getErrors(name)" name="errors">
      <validation-errors :errors="$parent.getErrors(name)"/>
    </slot>
  </div>
</template>8

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
      value: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: 'text'
      },
      min: {
        type: Number,
        required: false,
        default: null
      },
      max: {
        type: Number,
        required: false,
        default: null
      },
      size: {
        type: Number,
        required: false,
        default: null
      },
      step: {
        type: Number,
        required: false,
        default: null
      },
      pattern: {
        type: String,
        required: false,
        default: null
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
      }
    }
  }
</script>

