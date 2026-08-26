<template>
  <div :class="{ 'fvl-has-error': formHasErrors(name) }" class="fvl-radio-wrapper">
    <span class="fvl-radio-group-label">
      <span v-html="label"></span>
      <slot name="label_suffix" />
    </span>
    <div class="fvl-radio-group-wrapper">
      <div v-for="(option, key) in options" :key="key" class="fvl-radio-group">
        <input
          :id="name + key"
          :name="name"
          :value="key"
          :checked="modelValue == key"
          :class="fieldClass"
          :required="required"
          :readonly="readonly"
          :disabled="disabled"
          type="radio"
          class="fvl-radio"
          @change="handleChange"
        />
        <label :class="labelClass" :for="name + key" class="fvl-radio-label">
          <span class="fvl-radio-toggle" />
          <span class="fvl-radio-toggle-text">{{ option }}</span>
        </label>
      </div>
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
      modelValue: {
        type: [String, Number],
        default: '',
      },
      name: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        default: null,
      },
      options: {
        type: Object,
        required: true,
        default: () => {},
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
        this.$emit('update:modelValue', event.target.value)
        this.$emit('changed')
        this.formDirty(this.name)
      },
    },
  }
</script>
