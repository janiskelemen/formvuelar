<template>
  <div :class="{ 'fvl-has-error': formHasErrors(name) }" class="fvl-text-switch-wrapper">
    <input
      :id="id ? id : name"
      ref="checkbox"
      :name="name"
      :class="[{ checked: Boolean(modelValue) }, fieldClass]"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      :checked="Boolean(modelValue)"
      type="checkbox"
      class="fvl-text-switch hidden"
      @change="handleChange"
    />
    <label v-if="label" class="fvl-text-switch-label">
      <span v-html="label" />
      <slot name="label_suffix" />
    </label>

    <span class="inline-block relative normal-case cursor-pointer">
      <button type="button" class="fvl-text-switch-options-wrapper" @click="$refs.checkbox.click()">
        <div class="fvl-text-switch-option-1" :class="!modelValue ? 'active' : ''" v-html="options[0]"></div>
        <div class="fvl-text-switch-option-2" :class="{ 'active text-white': modelValue }" v-html="options[1]"></div>
      </button>
      <!-- switch bg -->
      <div class="fvl-text-switch-bg" :class="{ 'fvl-text-switch-bg-selected': modelValue }"></div>
    </span>

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
      options: {
        type: Array,
        required: true,
        default: () => ['Off', 'On'],
      },
      label: {
        type: String,
        required: false,
        default: '',
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
