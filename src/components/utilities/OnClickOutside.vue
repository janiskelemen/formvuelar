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
    },
    render() {
      return this.$slots.default[0]
    }
  }
</script>
