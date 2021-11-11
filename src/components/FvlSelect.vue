<template>
  <div :class="{ 'fvl-has-error': $parent.hasErrors(name) }" class="fvl-select-wrapper">
    <label v-if="label" :class="labelClass" :for="id" class="fvl-select-label">
      <span v-html="label"></span>
      <slot name="label_suffix" />
    </label>
    <div class="fvl-select">
      <select
        :id="id"
        :ref="_uid"
        :name="name"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :class="fieldClass"
        :required="required"
        :readonly="readonly"
        :disabled="disabled"
        @change="$emit('update:selected', $event.target.value), $emit('changed'), $parent.dirty(name)"
      >
        <option v-if="allowEmpty" disabled selected value v-text="placeholder" />
        <option v-for="(option, key) in options" :key="key" :value="key" :selected="selected == key" v-text="option" />
      </select>
      <div
        class="pointer-events-none absolute h-full inset-y-0 right-0 flex items-center px-2 text-gray-700"
        @click="$refs[_uid].click()"
      >
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
        </svg>
      </div>
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
      selected: {
        type: String | Number,
        default: '',
      },
      name: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        default: null,
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
      allowEmpty: {
        type: Boolean,
        default: true,
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
        default: '',
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
