<template>
  <div :class="{ 'fvl-has-error': $parent.hasErrors(name) }" class="fvl-slider-wrapper">
    <label v-if="label" :class="labelClass" :for="name" class="fvl-slider-label">
      <span v-html="label"></span>
      <slot name="label_suffix" />
    </label>
    <div class="fvl-slider-group">
      <slot :value="modelValue !== undefined ? modelValue : value" name="prefix">
        <span v-if="valuePosition == 'left'" class="fvl-slider-value fvl-slider-value-left">{{ modelValue !== undefined ? modelValue : value }}</span>
      </slot>
      <div class="fvl-slider-container">
        <input
          :id="id"
          :value="modelValue !== undefined ? modelValue : value"
          :name="name"
          :class="fieldClass"
          :min="min"
          :max="max"
          :required="required"
          :readonly="readonly"
          :disabled="disabled"
          type="range"
          class="fvl-slider"
          @change="$parent.dirty(name), $emit('changed')"
          @input="handleInput"
        />
      </div>
      <slot :value="modelValue !== undefined ? modelValue : value" name="suffix">
        <span v-if="valuePosition == 'right'" class="fvl-slider-value fvl-slider-value-right">{{ modelValue !== undefined ? modelValue : value }}</span>
      </slot>
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
      valuePosition: {
        type: String,
        default: 'left',
        validator: function (value) {
          // The value must match one of these strings
          return ['left', 'right', 'top', 'bottom'].indexOf(value) !== -1
        },
      },
      value: {
        validator: (prop) => typeof prop === 'string' || prop === null,
        default: '0',
      },
      modelValue: {
        validator: (prop) => typeof prop === 'string' || prop === null,
        default: undefined,
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
      handleInput(event) {
        // Support both Vue 2 and Vue 3 v-model patterns
        this.$emit('update:value', event.target.value);
        this.$emit('update:modelValue', event.target.value);
      }
    },
  }
</script>

