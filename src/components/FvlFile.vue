<template>
  <div :class="{'fvl-has-error' : $parent.hasErrors(name)}" class="fvl-file-wrapper">
    <label v-if="label" :for="name" :class="labelClass" class="fvl-file-label" v-html="label"/>
    <div class="fvl-file-button-wrapper">
      <button class="fvl-file-button" tabindex="-1" @click.prevent>
        <slot name="button">
          <span>{{ $formvuelar.selectFileText }}</span>
        </slot>
      </button>
      <span class="fvl-file-name" v-text="fileName"/>
      <input
        :name="name"
        :id="id"
        :ref="name"
        :placeholder="placeholder"
        :class="fieldClass"
        :required="required"
        :readonly="readonly"
        :accept="accept"
        :disabled="disabled || $parent.isLoading"
        type="file"
        class="fvl-file"
        @change="handleFileChange(); $parent.dirty(name);"
      >
    </div>
    <slot name="hint"/>
    <slot :errors="$parent.getErrors(name)" name="errors">
      <validation-errors :errors="$parent.getErrors(name)"/>
    </slot>
  </div>
</template>

<script>
  import ValidationErrors from './FvlErrors.vue'
  export default {
    components: {
      ValidationErrors
    },
    props: {
      file: {
        type: File | String,
        default: null
      },
      label: {
        type: String,
        required: false,
        default: null
      },
      name: {
        type: String,
        required: true
      },
      id: {
        type: String,
        default: null
      },
      accept: {
        type: String,
        required: false,
        default: null
      },
      placeholder: {
        type: String,
        required: false,
        default: null
      },
      fieldClass: {
        type: String,
        required: false,
        default: null
      },
      labelClass: {
        type: String,
        required: false,
        default: null
      },
      required: {
        type: Boolean,
        required: false,
        default: false
      },
      readonly: {
        type: Boolean,
        required: false,
        default: false
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    data() {
      return {
        fileName: ''
      }
    },
    watch: {
      file(newValue) {
        /* Emit null up if given value is not a File object */
        if (!(newValue instanceof File)) this.$emit('update:file', '')
      }
    },
    methods: {
      //Handles a change on the file upload
      handleFileChange() {
        let file = this.$refs[this.name].files[0]
        this.fileName = file.name
        this.$emit('update:file', file)
      }
    }
  }
</script>

