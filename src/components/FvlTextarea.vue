<template>
  <div :class="{ 'fvl-has-error': formHasErrors(name) }" class="fvl-textarea-wrapper">
    <label v-if="label" :class="labelClass" :for="name" class="fvl-textarea-label">
      <span v-html="label"></span>
      <slot name="label_suffix" />
    </label>
    <div class="fvl-input-group">
      <textarea
        :id="id"
        :value="modelValue"
        :name="name"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :class="fieldClass"
        :cols="cols"
        :maxlength="maxlength"
        :rows="rows"
        :wrap="wrap"
        :required="required"
        :readonly="readonly"
        :disabled="disabled"
        class="fvl-textarea"
        @change="handleChange"
        @input="handleInput"
      ></textarea>
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
        validator: (prop) => typeof prop === 'string' || prop === null,
        default: '',
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
      cols: {
        type: Number,
        required: false,
        default: null,
      },
      maxlength: {
        type: Number,
        required: false,
        default: null,
      },
      rows: {
        type: Number,
        required: false,
        default: null,
      },
      wrap: {
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
