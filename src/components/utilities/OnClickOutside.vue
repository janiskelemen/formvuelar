<script>
  export default {
    mounted() {
      const listener = e => {
        if (e.target === this.$el || this.$el.contains(e.target)) {
          return
        }
        this.$emit('do')
      }
      document.addEventListener('click', listener)
      this.$once('hook:beforeDestroy', () => {
        document.removeEventListener('click', listener)
      })
      this.$once('hook:beforeUnmount', () => {
        document.removeEventListener('click', listener)
      })
    },
    render() {
      // Vue 3 compatible version
      return this.$slots.default ? (Array.isArray(this.$slots.default()) ? this.$slots.default()[0] : this.$slots.default()) : null;
    }
  }
</script>
