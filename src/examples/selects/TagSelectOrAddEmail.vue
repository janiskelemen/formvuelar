<!-- Tag Select or Add example -->
<template>
  <div class="mb-16">
    <h3 class="border-b-2 mb-4 -mx-4 p-1 text-gray-800">
      Select or add new Emails
      <a
        href="https://github.com/janiskelemen/formvuelar/blob/master/src/examples/selects/TagSelectOrAddEmail.vue"
        target="_blank"
        class="float-right text-gray-600 hover:text-teal-500 text-xs"
        >Full Source Code</a
      >
    </h3>
    <!-- Setup form for selects -->
    <fvl-form :data="form" url="/select" class="relative">
      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="showSource = !showSource" />
      <!-- Search Select input component -->
      <fvl-tag-select
        :selected.sync="form.emails"
        :options="emailsOptions"
        :search-keys="['email']"
        :allow-new="true"
        :max="20"
        type="email"
        option-key="email"
        option-value="email"
        name="emails"
        label="Send Email To"
        placeholder="Add some emails..."
      />
      <!-- Source code area (only for example) -->
      <source-box :show-source="showSource" :source="source" />
    </fvl-form>

    <h3 class="border-b-2 mb-4 mt-8 -mx-4 p-1 text-gray-800">
      Throw error on one email address
      <a
        href="https://github.com/janiskelemen/formvuelar/blob/master/src/examples/selects/TagSelectOrAddEmail.vue"
        target="_blank"
        class="float-right text-gray-600 hover:text-teal-500 text-xs"
        >Full Source Code</a
      >
    </h3>
    <!-- Setup form for selects -->
    <fvl-form :data="form2" url="/selecterror" class="relative">
      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="showSource = !showSource" />
      <!-- Search Select input component -->
      <fvl-tag-select
        :selected.sync="form2.emails"
        :options="emailsOptions"
        :search-keys="['email']"
        :allow-new="true"
        :max="20"
        type="email"
        option-key="email"
        option-value="email"
        name="emails"
        label="Send Email To"
        placeholder="Add some emails..."
      />
      <fvl-submit>submit</fvl-submit>
      <!-- Source code area (only for example) -->
      <source-box :show-source="showSource" :source="source" />
    </fvl-form>
  </div>
</template>

<script>
  import { FvlForm, FvlTagSelect, FvlSubmit } from './../../formvuelar'

  import SourceToggle from './../utilities/SourceToggle.vue'
  import SourceBox from './../utilities/SourceBox.vue'

  export default {
    components: {
      FvlForm,
      FvlTagSelect,
      SourceToggle,
      SourceBox,
      FvlSubmit,
    },
    data() {
      return {
        form: {
          emails: null,
        },
        form2: {
          emails: ['donotAllowThis@email.com'],
        },
        emailsOptions: [{ email: 'my@email.com' }, { email: 'your@email.com' }, { email: 'his@email.com' }],
        showSource: false,
        source:
          `<fvl-tag-select \n` +
          `   :selected.sync="form.emails" \n` +
          `   :options="emailsOptions" \n` +
          `   :search-keys="['email']"\n` +
          `   :allow-new="true"\n` +
          `   :max="20"\n` +
          `   option-key="name"\n` +
          `   option-value="name"\n` +
          `   name="emails"\n` +
          `   label="Choose some emails"\n` +
          `   placeholder="Select..."\n` +
          `/>\n`,
      }
    },
  }
</script>
