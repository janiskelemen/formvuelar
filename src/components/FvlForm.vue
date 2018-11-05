<template>
  <form @submit.prevent="">
    <slot></slot>
  </form>
</template>

<script>
export default {
    props: {
        errors: {
            type: Object,
            default: () => {}
        }
    }
};
</script>

