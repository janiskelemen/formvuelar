<template>
    <button class="fvl-submit-button" @click="$emit('submit')" :disabled="$parent.isLoading">
        <span class="fvl-submit-text">
            <slot/>
        </span>
        <slot v-if="loader && $parent.isLoading" name="loader">
            <div class="fvl-submit-button-loader">
                <div class="fvl-submit-button-loader-progress" :style="{width: $parent.uploadPercentage + '%'}"/>
            </div>
        </slot>
    </button>
</template>

<script>
    export default {
      props: {
        loader: {
          type: Boolean,
          default: false
        }
      }
    }
</script>
      