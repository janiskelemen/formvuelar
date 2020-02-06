<template>
  <div :class="{'fvl-has-error' : $parent.hasErrors(name)}" class="fvl-image-wrapper">
    <label v-if="label" :for="name" :class="labelClass" class="fvl-image-label" v-html="label" />

    <div class="flex">
      <slot name="preview" :preview="preview">
        <div class="relative flex justify-center h-10 w-10 self-center bg-gray-200 rounded-full overflow-hidden mr-4 flex-shrink-0">
          <img v-if="preview.src" :src="preview.src" :alt="fileName" class="h-full w-full" />
        </div>
      </slot>
      <div class="fvl-image-button-wrapper">
        <button class="fvl-image-button" tabindex="-1" type="button" @click.prevent>
          <slot name="button">
            <span v-text="getConfig('selectImageText', 'Select Image')" />
          </slot>
        </button>
        <span class="fvl-image-name" v-text="fileName" />
        <input
          :id="id"
          :ref="name"
          :name="name"
          :placeholder="placeholder"
          :class="fieldClass"
          :required="required"
          :readonly="readonly"
          :accept="accept"
          :disabled="disabled || $parent.isLoading"
          type="file"
          class="fvl-image"
          @change="handleFileChange(); $emit('changed'); $parent.dirty(name);"
        />
      </div>
    </div>
    <slot name="hint" />
    <slot :errors="$parent.getErrors(name)" name="errors">
      <validation-errors :errors="$parent.getErrors(name)" />
    </slot>
  </div>
</template>

<script>
  import ValidationErrors from './FvlErrors.vue'
  import { config } from './mixins/config'
  export default {
    components: {
      ValidationErrors
    },
    mixins: [config],
    props: {
      file: {
        type: File | String,
        default: null
      },
      label: {
        type: String,
        required: false,
        default: null
      },
      name: {
        type: String,
        required: true
      },
      id: {
        type: String,
        default: null
      },
      accept: {
        type: String,
        required: false,
        default: 'image/*'
      },
      placeholder: {
        type: String,
        required: false,
        default: null
      },
      fieldClass: {
        type: String,
        required: false,
        default: null
      },
      labelClass: {
        type: String,
        required: false,
        default: null
      },
      required: {
        type: Boolean,
        required: false,
        default: false
      },
      readonly: {
        type: Boolean,
        required: false,
        default: false
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    data() {
      return {
        fileName: '',
        preview: {
          isimage: false,
          size: 0,
          loaded: false,
          percent: 0,
          status: 'initial',
          src: this.file,
          ratioHeight: 0
        }
      }
    },
    watch: {
      file(newValue) {
        /* Emit null up if given value is not a File object */
        if (!(newValue instanceof File)) this.$emit('update:file', '')
      }
    },
    mounted() {
      if (!(this.file instanceof File)) {
        this.$emit('update:file', '')
      }
    },
    methods: {
      //Handles a change on the file upload
      handleFileChange() {
        let file = this.$refs[this.name].files[0]
        this.fileName = file.name
        let mime = file.type
        mime = mime.split('/')
        // Create preview image
        let reader = this.getFileReader(mime)
        reader.readAsDataURL(file)
        this.$emit('update:file', file)
      },
      getFileReader(mime) {
        let $this = this
        let reader = new FileReader()
        reader.onloadstart = event => {
          let percent = Math.round((event.loaded / event.total) * 100)
          // Add preview to preview array
          $this.preview = {
            isimage: mime[0] == 'image',
            size: event.total,
            loaded: event.loaded,
            percent: percent,
            status: 'loading',
            src: '',
            ratioHeight: 0
          }
        }
        reader.onprogress = event => {
          let percent = Math.round((event.loaded / event.total) * 100)
          $this.preview.loaded = event.loaded
          $this.preview.percent = percent
        }
        reader.onabort = () => {
          $this.preview.status = 'failed'
          alert($this.file.name + ' could not be loaded!')
        }
        reader.onerror = () => {
          $this.preview.status = 'failed'
          alert($this.file.name + ' could not be loaded!')
          reader.abort()
        }
        reader.onload = () => {
          $this.preview.status = 'loaded'
          $this.preview.percent = 100
          if ($this.preview.isimage) {
            $this.getImagesize()
          }
        }

        return reader
      },
      getImagesize() {
        let _URL = window.URL || window.webkitURL
        let $this = this
        let image = new Image()
        image.onload = function() {
          $this.preview.src = $this.resizeImageForPreview(this)
          let minRatio = 19 // min ratio height 19%
          let maxRatio = 70 // max ratio height 70%
          $this.preview.height = this.height
          $this.preview.width = this.width
          let percent = this.height > 60 ? (this.height / this.width) * 100 : minRatio
          $this.preview.ratioHeight = percent < maxRatio ? percent : maxRatio
        }
        image.src = _URL.createObjectURL(this.file)
        return image.src
      },
      resizeImageForPreview(img) {
        let canvas = document.createElement('canvas')
        let ctx = canvas.getContext('2d')
        let canvasCopy = document.createElement('canvas')
        let copyContext = canvasCopy.getContext('2d')
        let ratio = 1

        if (img.width > this.maxPreviewImageWidth) ratio = this.maxPreviewImageWidth / img.width
        else if (img.height > this.maxPreviewImageHeight) ratio = this.maxPreviewImageHeight / img.height

        canvasCopy.width = img.width
        canvasCopy.height = img.height
        copyContext.drawImage(img, 0, 0)

        canvas.width = img.width * ratio
        canvas.height = img.height * ratio
        ctx.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvas.width, canvas.height)
        // encode image to data-uri with base64 version of compressed image
        return canvas.toDataURL()
      }
    }
  }
</script>

