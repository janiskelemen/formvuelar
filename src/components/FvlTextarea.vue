<template>
  <div :class="{'fvl-has-error' : $parent.hasErrors(name)}" class="fvl-textarea-wrapper">
    <label v-if="label" :class="labelClass" :for="name" class="fvl-textarea-label" v-html="label"/>
    <textarea
      :value="value"
      :name="name"
      :id="name"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :class="fieldClass"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      class="fvl-textarea"
      @change="$parent.dirty(name)"
      @input="$emit('update:value', $event.target.value)"
    ></textarea>
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
      value: {
        type: String,
        default: ''
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

