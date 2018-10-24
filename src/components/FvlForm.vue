<template>
  <form>
    <slot></slot>
  </form>
</template>
<style scoped lang="scss">
.content {
    border-bottom: 5px solid #341212;
}
</style>

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

