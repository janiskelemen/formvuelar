export const config = {
    methods: {
        getConfig( key, defaultValue ) {
            return this.$formvuelar && this.$formvuelar[ key ] ? this.$formvuelar[ key ] : defaultValue
        }
    }
}