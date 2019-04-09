<!-- Advanced Selects example -->
<template>
  <div class="mt-16">
    <h3 class="border-b-2 mb-4 -mx-4 p-1 text-grey-darkest">
      Select or add new Tags
      <a
        href="https://github.com/janiskelemen/formvuelar/blob/master/src/examples/selects/TagSelect.vue"
        target="_blank"
        class="float-right text-grey-dark hover:text-teal text-xs no-underline"
      >Full Source Code</a>
    </h3>
    <!-- Setup form for selects -->
    <fvl-form :data="form" url="/select" class="relative">
      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="showSource = !showSource"/>
      <!-- Search Select input component -->
      <fvl-tag-select
        :selected.sync="form.tags"
        :options="tagsOptions"
        :search-keys="['name']"
        :allow-new="true"
        option-key="name"
        option-value="name"
        name="tags"
        label="Choose any tags"
        placeholder="Select..."
      />
      <!-- Source code area (only for example) -->
      <source-box :show-source="showSource" :source="source"/>
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
      FvlSubmit,
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
          `<fvl-search-select \n` +
          `   :selected.sync="form.tags" \n` +
          `   :options="tagsOptions" \n` +
          `   :search-keys="['name']"\n` +
          `   :allow-new="true"\n` +
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