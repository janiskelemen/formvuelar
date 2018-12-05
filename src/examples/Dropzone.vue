<!-- File upload example -->
<template>
  <div class="mt-16">
    <h3 class="border-b-2 mb-4 -mx-4 p-1 text-grey-darkest">
      Dropzone
      <a
        href="https://github.com/janiskelemen/formvuelar/blob/master/src/examples/Dropzone.vue"
        target="_blank"
        class="float-right text-grey-dark hover:text-teal text-xs no-underline"
      >Full Source Code</a>
    </h3>
    <!-- Setup multipart form to support file uploads -->
    <fvl-form :data="form" url="/upload" multipart class="relative">
      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="showSource = !showSource"/>
      <!-- File input component -->
      <fvl-dropzone :file.sync="form.animals" label="Animals" name="animals"></fvl-dropzone>
      <!-- Source code area (only for example) -->
      <source-box :show-source="showSource" :source="source"/>
      <!-- Submit button with upload loader indicator enabled -->
      <fvl-submit loader>Upload</fvl-submit>
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
          animals: null
        },
        showSource: false,
        source:
          `<fvl-dropzone \n` +
          `    label="Animals" \n` +
          `    name="animals" \n` +
          `    :file.sync="form.animals" \n` +
          `/> \n`
      }
    }
  }
</script>