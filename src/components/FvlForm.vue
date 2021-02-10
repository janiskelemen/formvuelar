<template>
  <form
    :class="{ 'fvl-form-drag-over': isDragging }"
    @submit.prevent="submit()"
    @dragover="isDragging = true"
    @dragend="isDragging = false"
    @dragleave="isDragging = false"
    @dragexit="isDragging = false"
    @drop="isDragging = false"
  >
    <slot></slot>
  </form>
</template>

<script>
  import axios from 'axios'
  import _assignIn from 'lodash/assignIn'
  import { config } from './mixins/config'

  export default {
    mixins: [config],
    props: {
      method: {
        type: String,
        default: 'post',
        validator: function (value) {
          // The value must match one of the axios methods
          return ['get', 'post', 'put', 'patch', 'delete'].indexOf(value) !== -1
        },
      },
      url: {
        type: String,
        required: true,
      },
      multipart: {
        type: Boolean,
        default: false,
      },
      headers: {
        type: Object,
        default: () => {},
      },
      data: {
        type: Object,
        default: () => {
          return {}
        },
      },
    },
    data() {
      return {
        errors: {},
        uploadPercentage: 0,
        isLoading: false,
        isDragging: false,
      }
    },
    computed: {
      additionalHeaders() {
        let multipart = this.multipart
          ? {
              'Content-Type': 'multipart/form-data',
            }
          : {}
        let globalHeaders = this.getConfig('headers', {})
        return _assignIn(globalHeaders, this.headers, multipart)
      },
    },
    created() {
      this.axios = axios.create()
      this.loadInterceptors()
    },
    beforeDestroy() {
      this.unloadInterceptors()
    },
    methods: {
      prepareData() {
        let rawData = this.data
        let formData = new FormData()

        /* Map incoming data into formData */
        Object.keys(rawData).forEach((e) => {
          if (rawData[e] instanceof Array) {
            Object.keys(rawData[e]).forEach((f) => {
              if (rawData[e][f] instanceof File) {
                formData.append(e + '[]', rawData[e][f])
              } else {
                formData.append(e, this.replaceNullOnMultipart(rawData[e]))
              }
            })
          } else {
            if (rawData[e] instanceof Object && !(rawData[e] instanceof File)) {
              formData.append(e, JSON.stringify(this.replaceNullOnMultipart(rawData[e])))
            } else if (this.multipart && typeof rawData[e] === 'boolean') {
              formData.append(e, rawData[e] ? 1 : 0)
            } else {
              formData.append(e, this.replaceNullOnMultipart(rawData[e]))
            }
          }
        })

        /* Append original method into form data */
        if (this.method == 'patch' || this.method == 'put') {
          formData.append('_method', this.method)
        }

        return formData
      },
      replaceNullOnMultipart(val) {
        return this.multipart && val === null ? '' : val
      },
      submit() {
        let $this = this
        this.isLoading = true
        this.$emit('requeststarted')
        /* Set method to post if multipart form was send via patch/put */
        let method = this.multipart && (this.method == 'patch' || this.method == 'put') ? 'post' : this.method

        this.axios({
          method: method,
          url: this.url,
          data: this.multipart ? this.prepareData() : this.data,
          // only set params if request is get or delete
          params: this.method == 'get' || this.method == 'delete' ? this.data : {},
          headers: this.additionalHeaders,

          // Calculate current upload percentage
          onUploadProgress: function (progressEvent) {
            let percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            $this.uploadPercentage = percentage
            $this.$emit('uploadProgress', percentage)
          },
        })
          .then(function (response) {
            $this.$emit('success', response)
          })
          .catch(function (error) {
            /* Catch validation errors if status is 422 */
            if (error.response && error.response.status === 422) {
              $this.errors = error.response.data.errors
              $this.$nextTick(() => {
                document.getElementsByClassName('fvl-has-error')[0]?.scrollIntoView('smooth')
              })
            }

            /* Catch CSRF Token Missmatch - 419 */
            if (error.response && error.response.status === 419) {
              $this.$emit('error', { response: { status: 419 } })
              return
            }

            /* Catch API Token Missmatch - 401 */
            if (error.response && error.response.status === 401) {
              $this.$emit('error', { response: { status: 401 } })
              return
            }

            $this.$emit('error', error.response)
          })
          .then(function () {
            $this.isLoading = false
            $this.uploadPercentage = 0
            $this.$emit('uploadProgress', 0)
            $this.$emit('requestfinished')
          })
      },

      dirty(name) {
        this.errors[name] = false
        this.$emit('changed', { fieldName: name })
      },

      getErrors(name) {
        return this.errors[name] ? this.errors[name] : []
      },

      hasErrors(name) {
        return this.errors[name] && this.errors[name] !== [] ? true : false
      },
      loadInterceptors() {
        // Add config interceptors
        let interceptors = this.getConfig('interceptors', false)
        if (!interceptors) return

        if (interceptors.request) {
          this.requestInterceptor = this.axios.interceptors.request.use(
            interceptors.request.before,
            interceptors.request.error
          )
        }
        if (interceptors.response) {
          this.responseInterceptor = this.axios.interceptors.response.use(
            interceptors.response.success,
            interceptors.response.error
          )
        }
      },
      unloadInterceptors() {
        if (this.requestInterceptor) {
          this.axios.interceptors.request.eject(this.requestInterceptor)
        }
        if (this.responseInterceptor) {
          this.axios.interceptors.response.eject(this.responseInterceptor)
        }
      },
    },
  }
</script>

<style lang="scss">
  @import '../assets/scss/formvuelar.scss';
</style>
