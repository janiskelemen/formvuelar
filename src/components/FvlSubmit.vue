<template>
    <button
        class="fvl-submit-button"
        @click="$emit('submit')"
    >
      <slot/>
    </button>
</template>