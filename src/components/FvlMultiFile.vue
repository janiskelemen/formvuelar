<template>
  <div :class="{ 'fvl-has-error': formHasErrors(name) }" class="fvl-multi-file-wrapper">
    <label v-if="label" :for="name" :class="labelClass" class="fvl-multi-file-label">
      <span v-html="label"></span>
      <slot name="label_suffix" />
    </label>
    <div class="fvl-multi-file-button-wrapper">
      <button class="fvl-multi-file-button" tabindex="-1" type="button" @click.prevent>
        <slot name="button">
          <span v-text="getConfig('addFilesText', 'Add Files')" />
        </slot>
      </button>
      <span class="fvl-multi-file-name">
        <slot :files="filesList" name="selected-text">
          {{ filesList.length }}
          <span v-text="getConfig('filesSelectedText', 'Files Selected')" />
        </slot>
      </span>
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
        multiple
        type="file"
        class="fvl-multi-file"
        @change="handleFileChange"
      />
    </div>
    <div v-for="(file, key) in filesList" :key="key" class="fvl-multi-file-list">
      {{ file.name }}
      <span class="fvl-multi-file-remove" @click="removeFile(key)">
        <slot name="remove">
          <svg viewBox="0 0 40 40">
            <path stroke="current" stroke-linecap="round" stroke-width="4" d="M 10,10 L 30,30 M 30,10 L 10,30"></path>
          </svg>
        </slot>
      </span>
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

  export default {
    components: {
      ValidationErrors,
    },
    mixins: [config, formControl],
    emits: ['changed', 'update:modelValue'],
    props: {
      modelValue: {
        type: Array,
        default: () => [],
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
        filesList: Array.isArray(this.modelValue) ? [...this.modelValue] : [],
      }
    },
    watch: {
      modelValue(newValue) {
        newValue = Array.isArray(newValue) ? newValue : []
        const unchanged =
          newValue.length === this.filesList.length && newValue.every((file, index) => file === this.filesList[index])
        if (!unchanged) this.filesList = [...newValue]
      },
    },
    methods: {
      handleFileChange(event) {
        const uploadedFiles = Array.from(event.target.files || [])
        if (!uploadedFiles.length) return
        this.filesList = [...this.filesList, ...uploadedFiles]
        this.emitFiles()
        this.$emit('changed')
        this.formDirty(this.name)
      },
      removeFile(key) {
        this.filesList = this.filesList.filter((file, index) => index !== key)
        this.emitFiles()
        this.formDirty(this.name)
      },
      emitFiles() {
        this.$emit('update:modelValue', [...this.filesList])
      },
    },
  }
</script>
