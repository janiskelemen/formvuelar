<!-- File upload example -->
<template>
  <div class="mb-16">
    <h3 class="border-b-2 mb-4 -mx-4 p-1 text-gray-800">
      Dropzone
      <a
        href="https://github.com/janiskelemen/formvuelar/blob/master/src/examples/Dropzone.vue"
        target="_blank"
        class="float-right text-gray-600 hover:text-teal-500 text-xs"
      >Full Source Code</a>
    </h3>
    <!-- Setup multipart form to support file uploads -->
    <fvl-form :data="form" url="/upload" multipart class="relative">
      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="showSource = !showSource" />
      <!-- File input component -->
      <fvl-dropzone :files.sync="form.media" label="Media" name="media"></fvl-dropzone>
      <!-- Source code area (only for example) -->
      <source-box :show-source="showSource" :source="source" />
      <!-- Submit button with upload loader indicator enabled -->
      <fvl-submit loader>
        Upload
      </fvl-submit>
    </fvl-form>
  </div>
</template>

<script>
  import { FvlForm, FvlDropzone, FvlSubmit } from './../formvuelar'

  import SourceToggle from './utilities/SourceToggle.vue'
  import SourceBox from './utilities/SourceBox.vue'

  export default {
    components: {
      FvlForm,
      FvlDropzone,
      FvlSubmit,
      SourceToggle,
      SourceBox
    },
    data() {
      return {
        form: {
          media: null
        },
        showSource: false,
        source:
          `<fvl-dropzone \n` + `    label="Media" \n` + `    name="media" \n` + `    :file.sync="form.media" \n` + `/> \n`
      }
    }
  }
</script>