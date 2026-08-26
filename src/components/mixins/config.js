export const config = {
  methods: {
    getConfig(key, defaultValue) {
      const formvuelar = this.$.appContext.config.globalProperties.$formvuelar
      return formvuelar && formvuelar[key] ? formvuelar[key] : defaultValue
    },
  },
}
