<!-- File upload example -->
<template>
  <div class="mb-16">
    <h3 class="border-b-2 mb-4 -mx-4 p-1 text-gray-800">
      Single File Upload
      <a
        href="https://github.com/janiskelemen/formvuelar/blob/master/src/examples/FileUpload.vue"
        target="_blank"
        class="float-right text-gray-600 hover:text-teal-500 text-xs"
      >Full Source Code</a>
    </h3>
    <!-- Setup multipart form to support file uploads -->
    <fvl-form :data="form" url="/upload" multipart class="relative">
      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="showFileSource = !showFileSource" />
      <!-- File input component -->
      <fvl-file :file.sync="form.file" label="File" name="file">
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
              />
              <path
                d="M9.55227.24545C9.53182.225 9.51137.20455 9.47045.1841 9.45.1841 9.45.16364 9.4091.1432 9.28636.0409 9.12273 0 8.9591 0c-.10227 0-.225.02045-.32727.06136S8.42727.16364 8.34545.225l-4.0909 4.13182c-.16364.16363-.24546.38863-.24546.61363 0 .225.10227.4091.24546.55228.16363.16363.34772.24545.59318.24545.24545 0 .45-.08182.59318-.24545L8.1 2.84318v8.5091c0 .47045.36818.83863.83864.83863.47045 0 .83863-.36818.83863-.83864V2.84318l2.72046 2.67955c.16363.16363.34772.24545.59318.24545.24545 0 .45-.08182.59318-.24545.16364-.16364.24546-.38864.24546-.61364 0-.225-.10228-.40909-.24546-.55227L9.55227.24545z"
              />
            </g>
          </svg>
          <span>Select File</span>
        </template>
      </fvl-file>

      <!-- Source code area (only for example) -->
      <source-box :show-source="showFileSource" :source="fileSource" />
    </fvl-form>

    <h3 class="border-b-2 mb-4 mt-20 -mx-4 p-1 text-gray-800">
      Image Upload with Preview
      <a
        href="https://github.com/janiskelemen/formvuelar/blob/master/src/examples/FileUpload.vue"
        target="_blank"
        class="float-right text-gray-600 hover:text-teal-500 text-xs"
      >Full Source Code</a>
    </h3>
    <!-- Setup multipart form to support file uploads -->
    <fvl-form :data="form" url="/upload" multipart class="relative">
      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="showImageSource = !showImageSource" />
      <!-- File input component -->
      <fvl-image :file.sync="form.avatar" label="Avatar" name="avatar"></fvl-image>

      <!-- Source code area (only for example) -->
      <source-box :show-source="showImageSource" :source="imageSource" />
    </fvl-form>
  </div>
</template>

<script>
  import { FvlForm, FvlFile, FvlImage } from './../formvuelar'

  import SourceToggle from './utilities/SourceToggle.vue'
  import SourceBox from './utilities/SourceBox.vue'

  export default {
    components: {
      FvlForm,
      FvlFile,
      SourceToggle,
      SourceBox,
      FvlImage
    },
    data() {
      return {
        form: {
          file: null,
          avatar: 'https://www.fakepersongenerator.com/Face/female/female2016102582457221.jpg',
          name: null
        },
        showFileSource: false,
        fileSource:
          `<fvl-file \n` + `    label="File" \n` + `    name="file" \n` + `    :file.sync="form.file" \n` + `/> \n`
        ,
        showImageSource: false,
        imageSource:
          `<fvl-image \n` + `    label="Avatar" \n` + `    name="avatar" \n` + `    :file.sync="form.avatar" \n` + `/> \n`

      }
    }
  }
</script>