<template>
  <div class="fvl-submit-wrapper">
    <button
      :disabled="disabled || formIsLoading"
      :class="buttonClass"
      class="fvl-submit-button"
      @click="$emit('submit')"
    >
      <span class="fvl-submit-text">
        <slot />
      </span>
      <slot
        v-if="loader && formIsLoading"
        :is-loading="formIsLoading"
        :upload-percentage="formUploadPercentage"
        name="loader"
      >
        <div class="fvl-submit-button-loader">
          <div
            :style="{ width: formUploadPercentage + '%' }"
            class="fvl-submit-button-loader-progress"
          />
        </div>
      </slot>
    </button>
  </div>
</template>

<script>
  import { formControl } from './mixins/formControl'

  export default {
    mixins: [formControl],
    emits: ['submit'],
    props: {
      loader: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
      buttonClass: {
        type: String,
        default: null,
      },
    },
  }
</script>
