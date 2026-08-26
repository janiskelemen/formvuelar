<template>
  <div :class="{ 'fvl-has-error': formHasErrors(name) }" class="fvl-input-wrapper">
    <label v-if="label" :class="labelClass" :for="name" class="fvl-input-label">
      <span v-html="label" />
      <slot name="label_suffix" />
    </label>
    <div class="fvl-input-group">
      <slot name="prefix" />
      <input
        :id="id"
        :value="modelValue"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :class="fieldClass"
        :min="min"
        :max="max"
        :size="size"
        :step="step"
        :maxlength="maxlength"
        :required="required"
        :readonly="readonly"
        :disabled="disabled"
        :pattern="pattern"
        class="fvl-input"
        @change="handleChange"
        @input="handleInput"
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
  import { formControl } from './mixins/formControl'

  export default {
    components: {
      ValidationErrors,
    },
    mixins: [formControl],
    emits: ['changed', 'input', 'update:modelValue'],
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
        validator: (prop) => typeof prop === 'string' || prop === 'number' || prop === null,
        default: '',
      },
      type: {
        type: String,
        default: 'text',
      },
      min: {
        type: Number,
        required: false,
        default: null,
      },
      max: {
        type: Number,
        required: false,
        default: null,
      },
      maxlength: {
        type: Number,
        required: false,
        default: null,
      },
      size: {
        type: Number,
        required: false,
        default: null,
      },
      step: {
        type: Number,
        required: false,
        default: null,
      },
      pattern: {
        type: String,
        required: false,
        default: null,
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
    },
    methods: {
      handleChange() {
        this.formDirty(this.name)
        this.$emit('changed')
      },
      handleInput(event) {
        this.formDirty(this.name)
        this.$emit('update:modelValue', event.target.value)
        this.$emit('input', event)
      },
    },
  }
</script>
