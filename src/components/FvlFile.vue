<template>
  <div :class="{ 'fvl-has-error': formHasErrors(name) }" class="fvl-file-wrapper">
    <label v-if="label" :for="name" :class="labelClass" class="fvl-file-label">
      <span v-html="label"></span>
      <slot name="label_suffix" />
    </label>
    <div class="fvl-file-button-wrapper">
      <button class="fvl-file-button" tabindex="-1" type="button" @click.prevent>
        <slot name="button">
          <span v-text="getConfig('selectFileText', 'Select File')" />
        </slot>
      </button>
      <span class="fvl-file-name" v-text="fileName" />
      <input
        :id="id"
        :ref="name"
        :name="name"
        :placeholder="placeholder"
        :class="fieldClass"
        :required="required"
        :readonly="readonly"
        :accept="accept"
        :disabled="disabled || formIsLoading"
        type="file"
        class="fvl-file"
        @change="handleFileChange"
      />
    </div>
    <slot name="hint" />
    <slot :errors="formGetErrors(name)" name="errors">
      <validation-errors :errors="formGetErrors(name)" />
    </slot>
  </div>
</template>

<script>
  import ValidationErrors from './FvlErrors.vue'
  import { config } from './mixins/config'
  import { formControl } from './mixins/formControl'

  const isFile = (value) => typeof File !== 'undefined' && value instanceof File

  export default {
    components: {
      ValidationErrors,
    },
    mixins: [config, formControl],
    emits: ['changed', 'update:modelValue'],
    props: {
      modelValue: {
        default: null,
        validator: (value) => value === null || typeof value === 'string' || isFile(value),
      },
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
      accept: {
        type: String,
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
    data() {
      return {
        fileName: isFile(this.modelValue) ? this.modelValue.name : '',
      }
    },
    watch: {
      modelValue(newValue) {
        this.fileName = isFile(newValue) ? newValue.name : ''
      },
    },
    methods: {
      handleFileChange(event) {
        const file = event.target.files[0]
        if (!file) return
        this.fileName = file.name
        this.$emit('update:modelValue', file)
        this.$emit('changed')
        this.formDirty(this.name)
      },
    },
  }
</script>
