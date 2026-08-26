<template>
  <div :class="{ 'fvl-has-error': formHasErrors(name) }" class="fvl-slider-wrapper">
    <label v-if="label" :class="labelClass" :for="name" class="fvl-slider-label">
      <span v-html="label"></span>
      <slot name="label_suffix" />
    </label>
    <div class="fvl-slider-group">
      <slot :value="modelValue" name="prefix">
        <span v-if="valuePosition == 'left'" class="fvl-slider-value fvl-slider-value-left">{{ modelValue }}</span>
      </slot>
      <div class="fvl-slider-container">
        <input
          :id="id"
          :value="modelValue"
          :name="name"
          :class="fieldClass"
          :min="min"
          :max="max"
          :required="required"
          :readonly="readonly"
          :disabled="disabled"
          type="range"
          class="fvl-slider"
          @change="handleChange"
          @input="$emit('update:modelValue', $event.target.value)"
        />
      </div>
      <slot :value="modelValue" name="suffix">
        <span v-if="valuePosition == 'right'" class="fvl-slider-value fvl-slider-value-right">{{ modelValue }}</span>
      </slot>
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
        default: null,
      },
      valuePosition: {
        type: String,
        default: 'left',
        validator: function (value) {
          // The value must match one of these strings
          return ['left', 'right', 'top', 'bottom'].indexOf(value) !== -1
        },
      },
      modelValue: {
        validator: (prop) => typeof prop === 'string' || typeof prop === 'number' || prop === null,
        default: '0',
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
      placeholder: {
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
    },
  }
</script>
