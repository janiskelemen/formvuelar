<template>
  <div :class="{'fvl-has-error' : $parent.hasErrors(name)}" class="fvl-files-wrapper">
    <label v-if="label" :class="labelClass" :for="name" class="fvl-files-label" v-html="label"/>
    <div class="fvl-files-button-wrapper">
      <button class="fvl-files-button" tabindex="-1" @click.prevent>
        <slot name="button">
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
          <span>Select min 2 files</span>
        </slot>
      </button>
      <span class="fvl-files-name" v-text="fileName"/>
      <input
        :name="name"
        :id="name"
        :ref="name"
        :placeholder="placeholder"
        :class="fieldClass"
        :required="required"
        :readonly="readonly"
        :accept="accept"
        :disabled="disabled || $parent.isLoading"
        type="file"
        class="fvl-files"
        multible="multiple"
        @change="handleFileChange(); $parent.dirty(name);"
      >
    </div>
    <slot name="hint"/>
    <slot :errors="$parent.getErrors(name)" name="errors">
      <validation-errors :errors="$parent.getErrors(name)"/>
    </slot>
  </div>
</template>

<script>
  import ValidationErrors from './FvlErrors.vue'
  export default {
    components: {
      ValidationErrors
    },
    props: {
      label: {
        type: String,
        required: false,
        default: null
      },
      name: {
        type: String,
        required: true
      },
      accept: {
        type: String,
        default: null
      },
      multiple: {
        type: Boolean,
        default: false
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
        fileName: ''
      }
    },
    methods: {
      /*
                            Handles a change on the file upload
                          */
      handleFileChange() {
        let file = this.$refs[this.name].files[0]
        this.fileName = file.name
        this.$emit('update:file', file)
      }
    }
  }
</script>

