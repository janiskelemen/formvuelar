<template>
  <div :class="{ 'fvl-has-error': $parent.hasErrors(name) }" class="fvl-switch-wrapper">
    <input
      :id="id ? id : name"
      :name="name"
      :class="{ checked: checked, fieldClass }"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      :checked="checked"
      type="checkbox"
      class="fvl-switch hidden"
      @change="$emit('update:checked', $event.target.checked), $emit('changed'), $parent.dirty(name)"
    />
    <label v-if="label" :class="labelClass" :for="id ? id : name" class="fvl-switch-label">
      <span class="fvl-switch-toggle" />
      <div class="fvl-switch-text" v-html="label" />
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
        default: false,
        validator: function (value) {
          // The value must match one of these strings
          return [0, 1, false, true, '0', '1'].indexOf(value) !== -1
        },
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

