<!-- File upload example -->
<template>
  <div class="mb-16">
    <h3 class="border-b-2 mb-4 -mx-4 p-1 text-gray-800">
      Single File Upload
      <a
        href="https://github.com/janiskelemen/formvuelar/blob/master/src/examples/FileUpload.vue"
        target="_blank"
        class="float-right text-gray-600 hover:text-teal-500 text-xs"
        >Full Source Code</a
      >
    </h3>
    <!-- Setup multipart form to support file uploads -->
    <fvl-form :data="form" url="/upload" multipart class="relative">
      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="showFileSource = !showFileSource" />
      <!-- File input component -->
      <fvl-file :file.sync="form.file" label="File" name="file">
        <template slot="button">
          <svg class="fill-current text-white mr-2" width="18" height="16" xmlns="http://www.w3.org/2000/svg">
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
        >Full Source Code</a
      >
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

    <!-- Setup multipart form to support file uploads -->
    <fvl-form :data="form" url="/upload" multipart class="relative">
      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="showImageSource2 = !showImageSource2" />
      <!-- File input component -->
      <fvl-image
        :file.sync="form.avatar2"
        :show-file-name="false"
        label="Avatar without file name"
        name="avatar2"
      ></fvl-image>

      <!-- Source code area (only for example) -->
      <source-box :show-source="showImageSource2" :source="imageSource2" />
    </fvl-form>

    <!-- Setup multipart form to support file uploads -->
    <fvl-form :data="form" url="/upload" multipart class="relative">
      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="showImageSource3 = !showImageSource3" />
      <!-- File input component -->
      <fvl-image
        :file.sync="form.customimage"
        :show-file-name="false"
        label="Image with custom preview and button"
        name="customimage"
        field-class="flex-col"
      >
        <template #preview="{ preview, selectImage }">
          <div
            class="flex justify-center w-full h-48 flex-shrink-0 shadow rounded-lg bg-gray-200 cursor-pointer"
            @click="selectImage"
          >
            <img v-if="preview.src" class="self-center h-48 rounded-lg w-full object-cover" :src="preview.src" />
            <div v-else class="self-center text-center">
              <svg
                viewBox="0 0 24 24"
                width="50"
                height="50"
                stroke="currentColor"
                stroke-width="1"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-gray-400 mx-auto"
              >
                <polyline points="16 16 12 12 8 16" />
                <line x1="12" y1="12" x2="12" y2="21" />
                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                <polyline points="16 16 12 12 8 16" />
              </svg>
              <h2 class="mt-2 text-gray-500 font-bold">Click to select an image</h2>
            </div>
          </div>
        </template>
        <template #button-wrapper="{ selectImage }">
          <button class="mt-5 bg-grey-200 text-xs rounded px-4 py-2" @click="selectImage()">
            You can also click me to trigger file selection
          </button>
        </template>
      </fvl-image>

      <!-- Source code area (only for example) -->
      <source-box :show-source="showImageSource3" :source="imageSource3" />
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
      FvlImage,
    },
    data() {
      return {
        form: {
          file: null,
          avatar: 'https://www.fakepersongenerator.com/Face/female/female2016102582457221.jpg',
          avatar2: 'https://www.fakepersongenerator.com/Face/female/female2016102582457221.jpg',
          customimage: '',
          name: null,
        },
        showFileSource: false,
        fileSource:
          `<fvl-file \n` + `    label="File" \n` + `    name="file" \n` + `    :file.sync="form.file" \n` + `/> \n`,
        showImageSource: false,
        imageSource:
          `<fvl-image \n` +
          `    label="Avatar" \n` +
          `    name="avatar" \n` +
          `    :file.sync="form.avatar" \n` +
          `/> \n`,
        showImageSource2: false,
        imageSource2:
          `<fvl-image \n` +
          `    label="Avatar" \n` +
          `    name="avatar" \n` +
          `    :show-file-name="false" \n` +
          `    :file.sync="form.avatar" \n` +
          `/> \n`,
        showImageSource3: false,
        imageSource3:
          `<fvl-image \n` +
          `    :file.sync="form.customimage"\n` +
          `    :show-file-name="false"\n` +
          `    label="Image with custom preview and button"\n` +
          `    name="customimage"\n` +
          `    field-class="flex-col"\n` +
          `  >\n` +
          `    <template v-slot:preview="{ preview, selectImage }">\n` +
          `      <div\n` +
          `        class="flex justify-center w-full h-48 flex-shrink-0 shadow rounded-lg bg-gray-200 cursor-pointer"\n` +
          `        @click="selectImage"\n` +
          `      >\n` +
          `        <img\n` +
          `          v-if="preview.src"\n` +
          `          class="self-center h-48 rounded-lg w-full object-cover"\n` +
          `          :src="preview.src"\n` +
          `        />\n` +
          `        <div v-else class="self-center text-center">\n` +
          `          <svg\n` +
          `            viewBox="0 0 24 24"\n` +
          `            width="50"\n` +
          `            height="50"\n` +
          `            stroke="currentColor"\n` +
          `            stroke-width="1"\n` +
          `            fill="none"\n` +
          `            stroke-linecap="round"\n` +
          `            stroke-linejoin="round"\n` +
          `            class="text-gray-400 mx-auto"\n` +
          `          >\n` +
          `            <polyline points="16 16 12 12 8 16" />\n` +
          `            <line x1="12" y1="12" x2="12" y2="21" />\n` +
          `            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />\n` +
          `            <polyline points="16 16 12 12 8 16" />\n` +
          `          </svg>\n` +
          `          <h2 class="mt-2 text-gray-500 font-bold">Click to select an image</h2>\n` +
          `        </div>\n` +
          `      </div>\n` +
          `    </template>\n` +
          `    <template v-slot:button-wrapper="{ selectImage }">\n` +
          `      <button\n` +
          `        class="mt-5 bg-grey-200 text-xs rounded px-4 py-2"\n` +
          `        @click="selectImage()"\n` +
          `      >You can also click me to trigger file selection</button>\n` +
          `    </template>\n` +
          `  </fvl-image>`,
      }
    },
  }
</script>