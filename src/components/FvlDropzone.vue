<template>
  <div :class="{ 'fvl-has-error': formHasErrors(name) }" class="fvl-dropzone-wrapper">
    <label v-if="label" :for="name" :class="labelClass" class="fvl-dropzone-label">
      <span v-html="label"></span>
      <slot name="label_suffix" />
    </label>
    <slot v-if="filesCount" :files-count="filesCount" :files-size-sum="filesSizeSum" name="summary">
      {{ filesCount }}
      <span v-text="getConfig('filesSelectedAndSizeText', 'files selected with a combined size of')" />
      {{ filesSizeSum }}
    </slot>
    <div class="fvl-dropzone-area-wrapper">
      <div class="fvl-dropzone-area">
        <span v-if="!filesCount" class="fvl-dropzone-area-placeholder">
          <slot name="placeholder">
            <span v-text="getConfig('dropFilesHereText', 'Drop files here or click to upload.')" />
          </slot>
        </span>
        <div
          v-for="(file, key) in files"
          v-else
          :key="key"
          :class="previews[key] && previews[key].status == 'failed' ? 'fvl-dropzone-file-has-error' : ''"
          class="fvl-dropzone-file-preview"
        >
          <div v-if="previews[key] && previews[key].status == 'loading'" class="fvl-dropzone-file-preview-loader">
            <div :style="'width:' + previews[key].percent + '%'" />
          </div>
          <div
            v-if="previews[key]"
            :class="{ 'fvl-dropzone-file-preview-name-background': previews[key].isimage }"
            class="fvl-dropzone-file-preview-name"
          >
            {{ file.name }}
            <div class="fvl-dropzone-file-preview-size">
              {{ formatBytes(previews[key].size) }}
            </div>
          </div>
          <transition name="fvl-dropzone-fade">
            <div
              v-if="previews[key] && previews[key].isimage && previews[key].src"
              :style="{
                backgroundImage: 'url(' + previews[key].src + ')',
                paddingTop: previews[key].ratioHeight + '%',
              }"
              class="fvl-dropzone-file-image"
            />
          </transition>
          <span class="fvl-dropzone-remove" @click="removeFile(key)">
            <slot name="remove">
              <svg viewBox="0 0 40 40">
                <path
                  stroke="current"
                  stroke-linecap="round"
                  stroke-width="4"
                  d="M 10,10 L 30,30 M 30,10 L 10,30"
                ></path>
              </svg>
            </slot>
          </span>
        </div>
      </div>
      <input
        :id="id"
        :ref="name"
        :name="name"
        :placeholder="placeholder"
        :class="fieldClass"
        :required="required"
        :readonly="readonly"
        :accept="accept"
        :disabled="disabled || formIsLoading"
        multiple
        type="file"
        class="fvl-dropzone"
        @change="handleFileChange"
      />
    </div>
    <slot name="hint" />
    <slot :errors="formGetErrors(name)" name="errors">
      <validation-errors :errors="formGetErrors(name)" />
    </slot>
  </div>
</template>

<script>
  import ValidationErrors from './FvlErrors.vue'
  import { config } from './mixins/config'
  import { formControl } from './mixins/formControl'

  const createPreview = (file) => ({
    isimage: file.type.split('/')[0] === 'image',
    size: file.size,
    loaded: 0,
    percent: 0,
    status: 'loading',
    src: '',
    ratioHeight: 0,
  })

  export default {
    components: {
      ValidationErrors,
    },
    mixins: [config, formControl],
    emits: ['changed', 'update:modelValue'],
    props: {
      modelValue: {
        type: Array,
        default: () => [],
      },
      label: {
        type: String,
        required: false,
        default: null,
      },
      name: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        default: null,
      },
      accept: {
        type: String,
        required: false,
        default: null,
      },
      placeholder: {
        type: String,
        required: false,
        default: null,
      },
      fieldClass: {
        type: String,
        required: false,
        default: null,
      },
      labelClass: {
        type: String,
        required: false,
        default: null,
      },
      required: {
        type: Boolean,
        required: false,
        default: false,
      },
      readonly: {
        type: Boolean,
        required: false,
        default: false,
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
      maxSizePerFile: {
        type: Number,
        required: false,
        default: 20 * (1024 * 1024), // 20 MB
      },
      maxFiles: {
        type: Number,
        required: false,
        default: 50,
      },
      maxSizeOfAllFiles: {
        type: Number,
        required: false,
        default: null,
      },
      maxPreviewImageWidth: {
        type: Number,
        required: false,
        default: 400,
      },
      maxPreviewImageHeight: {
        type: Number,
        required: false,
        default: 200,
      },
    },
    data() {
      return {
        files: Array.isArray(this.modelValue) ? [...this.modelValue] : [],
        previews: Array.isArray(this.modelValue) ? this.modelValue.map(createPreview) : [],
        loaded: 0,
      }
    },
    watch: {
      modelValue(newValue) {
        newValue = Array.isArray(newValue) ? newValue : []
        const unchanged =
          newValue.length === this.files.length && newValue.every((file, index) => file === this.files[index])
        if (!unchanged) {
          this.files = [...newValue]
          this.previews = newValue.map(createPreview)
        }
      },
    },
    computed: {
      filesCount() {
        return this.files.length
      },
      filesSizeSum() {
        let size = 0
        this.previews.forEach(function (e) {
          size = size + e.size
        })
        return this.formatBytes(size)
      },
    },
    methods: {
      //Handles a change on the file upload
      handleFileChange(event) {
        const uploadedFiles = Array.from(event.target.files || [])
        for (const file of uploadedFiles) {
          // Get mime type
          let mime = file.type
          mime = mime.split('/')
          // Create preview image
          const index = this.files.push(file) - 1
          this.previews.push(createPreview(file))
          let reader = this.getFileReader(mime, index)
          reader.readAsDataURL(file)
        }
        if (!uploadedFiles.length) return
        this.emitFiles()
        this.$emit('changed')
        this.formDirty(this.name)
      },
      removeFile(key) {
        this.files.splice(key, 1)
        this.previews.splice(key, 1)
        this.emitFiles()
        this.formDirty(this.name)
      },
      emitFiles() {
        this.$emit('update:modelValue', [...this.files])
      },
      formatBytes(a, b) {
        if (0 == a) return '0 Bytes'
        var c = 1024,
          d = b || 2,
          e = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
          f = Math.floor(Math.log(a) / Math.log(c))
        return parseFloat((a / Math.pow(c, f)).toFixed(d)) + ' ' + e[f]
      },
      getFileReader(mime, index) {
        let $this = this
        let reader = new FileReader()
        reader.onloadstart = (event) => {
          let percent = Math.round((event.loaded / event.total) * 100)
          $this.previews[index].isimage = mime[0] == 'image'
          $this.previews[index].size = event.total
          $this.previews[index].loaded = event.loaded
          $this.previews[index].percent = percent
        }
        reader.onprogress = (event) => {
          let percent = Math.round((event.loaded / event.total) * 100)
          $this.previews[index].loaded = event.loaded
          $this.previews[index].percent = percent
        }
        reader.onabort = () => {
          $this.previews[index].status = 'failed'
          alert($this.files[index].name + ' could not be loaded!')
        }
        reader.onerror = () => {
          $this.previews[index].status = 'failed'
          alert($this.files[index].name + ' could not be loaded!')
          reader.abort()
        }
        reader.onload = () => {
          $this.previews[index].status = 'loaded'
          $this.previews[index].percent = 100
          if ($this.previews[index].isimage) {
            $this.getImagesize(index)
          }
        }

        return reader
      },
      getImagesize(index) {
        let _URL = window.URL || window.webkitURL
        let $this = this
        let image = new Image()
        image.onload = function () {
          $this.previews[index].src = $this.resizeImageForPreview(this)
          let minRatio = 19 // min ratio height 19%
          let maxRatio = 70 // max ratio height 70%
          $this.previews[index].height = this.height
          $this.previews[index].width = this.width
          let percent = this.height > 60 ? (this.height / this.width) * 100 : minRatio
          $this.previews[index].ratioHeight = percent < maxRatio ? percent : maxRatio
        }
        image.src = _URL.createObjectURL(this.files[index])
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
      },
    },
  }
</script>
