<template>
  <div :class="{ 'fvl-has-error': $parent.hasErrors(name) }" class="fvl-textarea-wrapper">
    <label v-if="label" :class="labelClass" :for="name" class="fvl-textarea-label">
      <span v-html="label"></span>
      <slot name="label_suffix" />
    </label>
    <div class="fvl-input-group">
      <textarea
        :id="id"
        :value="value"
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
        @change="$parent.dirty(name), $emit('changed')"
        @input="$parent.dirty(name), $emit('update:value', $event.target.value), $emit('input', $event)"
      ></textarea>
    </div>
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
        default: null,
      },
      value: {
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
  }
</script>

