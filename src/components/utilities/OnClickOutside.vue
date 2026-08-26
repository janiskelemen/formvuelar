<script>
  export default {
    emits: ['do'],
    data() {
      return {
        listener: null,
      }
    },
    mounted() {
      this.listener = (e) => {
        if (e.target === this.$el || this.$el.contains(e.target)) {
          return
        }
        this.$emit('do')
      }
      document.addEventListener('click', this.listener)
    },
    beforeUnmount() {
      document.removeEventListener('click', this.listener)
    },
    render() {
      const children = this.$slots.default?.() || []

      // Vue 3 slots always return an array. Returning that array creates a
      // Fragment, whose `$el` is a comment node and cannot contain click
      // targets. Keep the slotted element as this component's real root when
      // there is only one child so inside clicks can be identified correctly.
      return children.length === 1 ? children[0] : children
    },
  }
</script>
