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
  export default {
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

    methods: {
      prepareData() {
        let rawData = this.data
        let formData = new FormData()
        
        // Map remaining data into formData
        Object.keys(rawData).map(e => {
          formData.append(e, rawData[e])
        })

        return formData
      },

      submit() {
        let $this = this
        this.isLoading = true
        axios({
          method: this.method,
          url: this.url,
          data: this.multipart ? this.prepareData() : this.data,
          // only set params if request is get or delete
          params: this.method == 'get' || this.method == 'delete' ? this.data : {},
          headers: this.multipart
            ? {
                'Content-Type': 'multipart/form-data'
              }
            : {},

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

