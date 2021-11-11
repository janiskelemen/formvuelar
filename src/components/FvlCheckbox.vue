<template>
  <div :class="{ 'fvl-has-error': $parent.hasErrors(name) }" class="fvl-checkbox-wrapper">
    <input
      :id="id ? id : name"
      :name="name"
      :class="{ checked: checked, fieldClass }"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      :checked="checked"
      :value="value"
      type="checkbox"
      class="fvl-checkbox"
      @change="$emit('update:checked', $event.target.checked), $emit('changed'), $parent.dirty(name)"
    />
    <label v-if="label" :class="labelClass" :for="id ? id : name" class="fvl-checkbox-label">
      <span class="fvl-checkbox-outer" />
      <slot name="label_prefix" />
      <span v-html="label"></span>
      <slot name="label_suffix" />
    </label>
    <slot name="hint" />
    <slot :errors="$parent.getErrors(name)" name="errors">
      <validation-errors :errors="$parent.getErrors(name)" />
    </slot>
  </div>
</template>

<script>
  import ValidationErrors from './FvlErrors.vue'
  export default {
    components: {
      ValidationErrors,
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
        required: false,
        default: null,
      },
      checked: {
        type: Boolean,
        default: false,
      },
      value: {
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
      required: {
        type: Boolean,
        required: false,
        default: false,
      },
      readonly: {
        type: Boolean,
        required: false,
        default: false,
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
  }
</script>

