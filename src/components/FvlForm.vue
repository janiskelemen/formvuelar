<template>
  <form
    :class="{'fvl-form-drag-over': isDragging}"
    @submit.prevent="submit()"
    @dragover="isDragging=true"
    @dragend="isDragging=false"
    @dragleave="isDragging=false"
    @dragexit="isDragging=false"
    @drop="isDragging=false"
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
        validator: function(value) {
          // The value must match one of the axios methods
          return ['get', 'post', 'put', 'patch', 'delete'].indexOf(value) !== -1
        }
      },
      url: {
        type: String,
        required: true
      },
      multipart: {
        type: Boolean,
        default: false
      },
      headers: {
        type: Object,
        default: () => {}
      },
      data: {
        type: Object,
        default: () => {
          return {}
        }
      }
    },
    data() {
      return {
        errors: {},
        uploadPercentage: 0,
        isLoading: false,
        isDragging: false
      }
    },
    computed: {
      additionalHeaders() {
        let multipart = this.multipart
          ? {
              'Content-Type': 'multipart/form-data'
            }
          : {}
        let globalHeaders = this.getConfig('headers', {})
        return _assignIn(globalHeaders, this.headers, multipart)
      }
    },
    methods: {
      prepareData() {
        let rawData = this.data
        let formData = new FormData()

        /* Map incoming data into formData */
        Object.keys(rawData).forEach(e => {
          if (rawData[e] instanceof Array) {
            Object.keys(rawData[e]).forEach(f => {
              if (rawData[e][f] instanceof File) {
                formData.append(e + '[]', rawData[e][f])
              } else {
                formData.append(e, rawData[e])
              }
            })
          } else {
            formData.append(e, rawData[e])
          }
        })

        /* Append original method into form data */
        if (this.method == 'patch' || this.method == 'put') {
          formData.append('_method', this.method)
        }

        return formData
      },

      submit() {
        let $this = this
        this.isLoading = true
        /* Set method to post if multipart form was send via patch/put */
        let method = this.multipart && (this.method == 'patch' || this.method == 'put') ? 'post' : this.method
        axios({
          method: method,
          url: this.url,
          data: this.multipart ? this.prepareData() : this.data,
          // only set params if request is get or delete
          params: this.method == 'get' || this.method == 'delete' ? this.data : {},
          headers: this.additionalHeaders,

          // Calculate current upload percentage
          onUploadProgress: function(progressEvent) {
            let percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total)
            $this.uploadPercentage = percentage
            $this.$emit('uploadProgress', percentage)
          }
        })
          .then(function(response) {
            $this.$emit('success', response)
          })
          .catch(function(error) {
            /* Catch validation errors if status is 422 */
            if (error.response && error.response.status === 422) {
              $this.errors = error.response.data.errors
            }
            $this.$emit('error', error)
          })
          .then(function() {
            $this.isLoading = false
            $this.uploadPercentage = 0
            $this.$emit('uploadProgress', 0)
          })
      },

      dirty(name) {
        this.errors[name] = false
      },

      getErrors(name) {
        return this.errors[name] ? this.errors[name] : []
      },

      hasErrors(name) {
        return this.errors[name] && this.errors[name] !== [] ? true : false
      }
    }
  }
</script>

<style lang="scss">
  @import '../assets/scss/formvuelar.scss';
</style>

