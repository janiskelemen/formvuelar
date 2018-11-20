<template>
    <button :disabled="$parent.isLoading" class="fvl-submit-button" @click="$emit('submit')">
        <span class="fvl-submit-text">
            <slot/>
        </span>
        <slot
            v-if="loader && $parent.isLoading"
            :is-loading="$parent.isLoading"
            :upload-percentage="$parent.uploadPercentage"
            name="loader"
        >
            <div class="fvl-submit-button-loader">
                <div :style="{width: $parent.uploadPercentage + '%'}" class="fvl-submit-button-loader-progress"/>
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
      