<!-- File upload example -->
<template>
  <div class="mb-16">
    <h3 class="border-b-2 mb-4 -mx-4 p-1 text-gray-800">
      Multi File Upload
      <a
        href="https://github.com/janiskelemen/formvuelar/blob/master/src/examples/MultiFileUpload.vue"
        target="_blank"
        class="float-right text-gray-600 hover:text-teal-500 text-xs"
      >Full Source Code</a>
    </h3>
    <!-- Setup multipart form to support file uploads -->
    <fvl-form :data="form" url="/upload" multipart class="relative">
      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="showSource = !showSource" />
      <!-- File input component -->
      <fvl-multi-file :files.sync="form.gallery" label="Gallery" name="gallery">
        <template slot="button">
          <svg
            class="fill-current text-white mr-2"
            width="18"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill-rule="nonzero">
              <path
                d="M17.0591 6.85227c-.47046 0-.83865.36818-.83865.83864v5.76818H1.7591V7.67045c0-.47045-.36818-.83863-.83864-.83863-.47045 0-.83863.36818-.83863.83863v6.62728c0 .47045.36818.83863.83863.83863H17.0591c.47046 0 .83864-.36818.83864-.83863V7.67045c0-.45-.36818-.81818-.83864-.81818z"
              ></path>
              <path
                d="M9.55227.24545C9.53182.225 9.51137.20455 9.47045.1841 9.45.1841 9.45.16364 9.4091.1432 9.28636.0409 9.12273 0 8.9591 0c-.10227 0-.225.02045-.32727.06136S8.42727.16364 8.34545.225l-4.0909 4.13182c-.16364.16363-.24546.38863-.24546.61363 0 .225.10227.4091.24546.55228.16363.16363.34772.24545.59318.24545.24545 0 .45-.08182.59318-.24545L8.1 2.84318v8.5091c0 .47045.36818.83863.83864.83863.47045 0 .83863-.36818.83863-.83864V2.84318l2.72046 2.67955c.16363.16363.34772.24545.59318.24545.24545 0 .45-.08182.59318-.24545.16364-.16364.24546-.38864.24546-.61364 0-.225-.10228-.40909-.24546-.55227L9.55227.24545z"
              ></path>
            </g>
          </svg>
          <span>Add Files</span>
        </template>
      </fvl-multi-file>
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
  import { FvlForm, FvlMultiFile, FvlSubmit } from './../formvuelar'

  import SourceToggle from './utilities/SourceToggle.vue'
  import SourceBox from './utilities/SourceBox.vue'

  export default {
    components: {
      FvlForm,
      FvlMultiFile,
      FvlSubmit,
      SourceToggle,
      SourceBox
    },
    data() {
      return {
        form: {
          gallery: null
        },
        showSource: false,
        source:
          `<fvl-multi-file \n` +
          `    label="Gallery" \n` +
          `    name="gallery" \n` +
          `    :files.sync="form.gallery" \n` +
          `/> \n`
      }
    }
  }
</script>