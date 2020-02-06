<!-- Prefilled form example -->
<template>
  <div class="mb-16">
    <h3 class="border-b-2 mb-4 -mx-4 p-1 text-gray-800">
      Prefilled Form
      <a
        class="float-right text-gray-600 hover:text-teal-500 text-xs"
        href="https://github.com/janiskelemen/formvuelar/blob/master/src/examples/PrefilledForm.vue"
        target="_blank"
      >Full Source Code</a>
    </h3>
    <!-- Setup basic form -->
    <fvl-form :data="form" class="relative" url="/update">
      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="toggleSource('fullname')" />
      <!-- Text input component -->
      <fvl-input
        :value.sync="form.fullname"
        autocomplete="fullname"
        label="Full Name"
        name="fullname"
        placeholder="Type your full name"
        type="text"
      />
      <!-- Source code area (only for example) -->
      <source-box :show-source="showSource == 'fullname'" :source="source.fullname" />
      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="toggleSource('bio')" />
      <!-- Textarea component -->
      <fvl-textarea :value.sync="form.bio" label="Bio" name="bio" placeholder="Type your story..." />
      <!-- Source code area (only for example) -->
      <source-box :show-source="showSource == 'bio'" :source="source.bio" />
      <!-- Radio component with options -->
      <fvl-radio
        :checked.sync="form.pet"
        :options="{'cat': 'Cat', 'dog': 'Dog'}"
        class="w-full lg:w-1/2"
        label="Favorite pet"
        name="pet"
      />
      <!-- Source code area (only for example) -->
      <source-box :show-source="showSource == 'pet'" :source="source.pet" />
      <!-- Submit button component -->
      <fvl-submit>Validate</fvl-submit>
    </fvl-form>
  </div>
</template>

<script>
  import { FvlForm, FvlInput, FvlTextarea, FvlRadio, FvlSubmit } from './../formvuelar'

  import SourceToggle from './utilities/SourceToggle.vue'
  import SourceBox from './utilities/SourceBox.vue'

  export default {
    components: {
      FvlForm,
      FvlInput,
      FvlTextarea,
      FvlRadio,
      FvlSubmit,
      SourceToggle,
      SourceBox
    },
    props: {
      initFullname: {
        type: String,
        default: ''
      },
      initBio: {
        type: String,
        default: ''
      },
      initPet: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        form: {
          fullname: this.initFullname,
          bio: this.initBio,
          pet: this.initPet
        },
        showSource: '',
        source: {
          fullname:
            `<fvl-input \n` +
            `     label="Full Name" \n` +
            `     name="fullname" \n` +
            `     type="text"  \n` +
            `     autocomplete="name"  \n` +
            `     :value.sync="form.fullname"  \n` +
            `     placeholder="Type your full name"  \n` +
            `/>`,
          bio:
            `<fvl-textarea \n` +
            `     label="Bio" \n` +
            `     name="bio" \n` +
            `     :value.sync="form.bio" \n` +
            `     placeholder="Type your story..." \n` +
            `/>`,
          pet:
            `<fvl-radio \n` +
            `    label="Select any option" \n` +
            `    name="pet" \n` +
            `    :options="{'cat': 'Cat', 'dog': 'Dog'}" \n` +
            `    :checked.sync="form.pet" \n` +
            `/> \n`
        }
      }
    },
    methods: {
      toggleSource(field) {
        this.showSource = this.showSource == field ? '' : field
      }
    }
  }
</script>