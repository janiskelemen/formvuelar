<template>
  <div :class="{ 'fvl-has-error': formHasErrors(name) }" class="fvl-checkbox-wrapper">
    <input
      :id="id ? id : name"
      :name="name"
      :class="[{ checked: modelValue }, fieldClass]"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      :checked="modelValue"
      :value="value"
      type="checkbox"
      class="fvl-checkbox"
      @change="handleChange"
    />
    <label v-if="label" :class="labelClass" :for="id ? id : name" class="fvl-checkbox-label">
      <span class="fvl-checkbox-outer" />
      <slot name="label_prefix" />
      <span v-html="label"></span>
      <slot name="label_suffix" />
    </label>
    <slot name="hint" />
    <slot :errors="formGetErrors(name)" name="errors">
      <validation-errors :errors="formGetErrors(name)" />
    </slot>
  </div>
</template>

<script>
  import ValidationErrors from './FvlErrors.vue'
  import { formControl } from './mixins/formControl'

  export default {
    components: {
      ValidationErrors,
    },
    mixins: [formControl],
    emits: ['changed', 'update:modelValue'],
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
      modelValue: {
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
    methods: {
      handleChange(event) {
        this.$emit('update:modelValue', event.target.checked)
        this.$emit('changed')
        this.formDirty(this.name)
      },
    },
  }
</script>
