<template>
  <div class="fvl-submit-wrapper">
    <button
      :disabled="disabled || $parent.isLoading"
      :class="buttonClass"
      class="fvl-submit-button"
      @click="$emit('submit')"
    >
      <span class="fvl-submit-text">
        <slot />
      </span>
      <slot
        v-if="loader && $parent.isLoading"
        :is-loading="$parent.isLoading"
        :upload-percentage="$parent.uploadPercentage"
        name="loader"
      >
        <div class="fvl-submit-button-loader">
          <div
            :style="{width: $parent.uploadPercentage + '%'}"
            class="fvl-submit-button-loader-progress"
          />
        </div>
      </slot>
    </button>
  </div>
</template>

<script>
  export default {
    props: {
      loader: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
      },
      buttonClass: {
        type: String,
        default: null
      }
    }
  }
</script>
      