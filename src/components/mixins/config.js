export const config = {
  methods: {
    getConfig(key, defaultValue) {
      return typeof this.$formvuelar != 'undefined' && this.$formvuelar[key] ? this.$formvuelar[key] : defaultValue
    },
  },
}
