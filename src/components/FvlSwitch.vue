<template>
  <div :class="{ 'fvl-has-error': formHasErrors(name) }" class="fvl-switch-wrapper">
    <input
      :id="id ? id : name"
      :name="name"
      :class="[{ checked: Boolean(modelValue) }, fieldClass]"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      :checked="Boolean(modelValue)"
      type="checkbox"
      class="fvl-switch hidden"
      @change="handleChange"
    />
    <label v-if="label" :class="labelClass" :for="id ? id : name" class="fvl-switch-label">
      <span class="fvl-switch-toggle" />
      <div class="fvl-switch-text" v-html="label" />
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
    methods: {
      handleChange(event) {
        this.$emit('update:modelValue', event.target.checked)
        this.$emit('changed')
        this.formDirty(this.name)
      },
    },
  }
</script>
