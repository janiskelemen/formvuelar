<template>
  <div :class="{ 'fvl-has-error': $parent.hasErrors(name) }" class="fvl-text-switch-wrapper">
    <input
      :id="id ? id : name"
      ref="checkbox"
      :name="name"
      :class="{ checked: checked, fieldClass }"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      :checked="checked"
      type="checkbox"
      class="fvl-text-switch hidden"
      @change="$emit('update:checked', $event.target.checked), $emit('changed'), $parent.dirty(name)"
    />
    <label v-if="label" class="fvl-text-switch-label">
      <span v-html="label" />
      <slot name="label_suffix" />
    </label>

    <span class="inline-block relative normal-case cursor-pointer">
      <button type="button" class="fvl-text-switch-options-wrapper" @click="$refs.checkbox.click()">
        <div class="fvl-text-switch-option-1" :class="!checked ? 'active' : ''" v-html="options[0]"></div>
        <div class="fvl-text-switch-option-2" :class="{ 'active text-white': checked }" v-html="options[1]"></div>
      </button>
      <!-- switch bg -->
      <div class="fvl-text-switch-bg" :class="{ 'fvl-text-switch-bg-selected': checked }"></div>
    </span>

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