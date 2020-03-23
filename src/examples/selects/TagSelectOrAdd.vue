<!-- Tag Select or Add example -->
<template>
  <div class="mb-16">
    <h3 class="border-b-2 mb-4 -mx-4 p-1 text-gray-800">
      Select or add new Tags
      <a
        href="https://github.com/janiskelemen/formvuelar/blob/master/src/examples/selects/TagSelect.vue"
        target="_blank"
        class="float-right text-gray-600 hover:text-teal-500 text-xs"
      >Full Source Code</a>
    </h3>
    <!-- Setup form for selects -->
    <fvl-form :data="form" url="/select" class="relative">
      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="showSource = !showSource" />
      <!-- Search Select input component -->
      <fvl-tag-select
        :selected.sync="form.tags"
        :options="tagsOptions"
        :search-keys="['name']"
        :allow-new="true"
        :max="20"
        option-key="name"
        option-value="name"
        name="tags"
        label="Tags"
        placeholder="Add some tags..."
      />
      <!-- Source code area (only for example) -->
      <source-box :show-source="showSource" :source="source" />
    </fvl-form>
  </div>
</template>

<script>
  import { FvlForm, FvlTagSelect } from './../../formvuelar'

  import SourceToggle from './../utilities/SourceToggle.vue'
  import SourceBox from './../utilities/SourceBox.vue'

  export default {
    components: {
      FvlForm,
      FvlTagSelect,
      SourceToggle,
      SourceBox
    },
    data() {
      return {
        form: {
          tags: null
        },
        tagsOptions: [
          { name: 'Cloud' },
          { name: 'Autocompletion' },
          { name: 'Remote list' },
          { name: 'Fast' },
          { name: 'Nice' },
          { name: 'Cool' },
          { name: 'Vue' },
          { name: 'Advanced' }
        ],
        showSource: false,
        source:
          `<fvl-tag-select \n` +
          `   :selected.sync="form.tags" \n` +
          `   :options="tagsOptions" \n` +
          `   :search-keys="['name']"\n` +
          `   :allow-new="true"\n` +
          `   :max="20"\n` +
          `   option-key="name"\n` +
          `   option-value="name"\n` +
          `   name="tags"\n` +
          `   label="Choose some tags"\n` +
          `   placeholder="Select..."\n` +
          `/>\n`
      }
    }
  }
</script>
