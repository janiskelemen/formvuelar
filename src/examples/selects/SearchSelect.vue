<!-- Advanced Selects example -->
<template>
  <div class="mb-16">
    <h3 class="border-b-2 mb-4 -mx-4 p-1 text-gray-800">
      Select with Search
      <a
        href="https://github.com/janiskelemen/formvuelar/blob/master/src/examples/selects/SearchSelect.vue"
        target="_blank"
        class="float-right text-gray-600 hover:text-teal-500 text-xs"
      >Full Source Code</a>
    </h3>
    <!-- Setup form for selects -->
    <fvl-form :data="form" url="/select" class="relative">
      <!-- Add source code toggle button (only for example) -->
      <source-toggle @toggle="showSource = !showSource" />
      <!-- Search Select input component -->
      <fvl-search-select
        :selected.sync="form.genre"
        :options="genreOptions"
        :search-keys="['name']"
        option-key="name"
        option-value="name"
        name="genre"
        label="Choose any genre"
        placeholder="Select..."
      />
      <!-- Source code area (only for example) -->
      <source-box :show-source="showSource" :source="source" />
    </fvl-form>
  </div>
</template>

<script>
import { FvlForm, FvlSearchSelect } from './../../formvuelar'

import SourceToggle from './../utilities/SourceToggle.vue'
import SourceBox from './../utilities/SourceBox.vue'

export default {
  components: {
    FvlForm,
    FvlSearchSelect,
    SourceToggle,
    SourceBox
  },
  data() {
    return {
      form: {
        genre: null
      },
      genreOptions: [
        { name: 'Blues' },
        { name: 'Jazz' },
        { name: 'Rock and Roll' },
        { name: 'Pop Rock' },
        { name: 'Country' },
        { name: 'Soul' },
        { name: 'Dance' },
        { name: 'Hip Hop' }
      ],
      showSource: false,
      source:
        `<fvl-search-select \n` +
        `   :selected.sync="form.genre" \n` +
        `   :options="genreOptions" \n` +
        `   :search-keys="['name']"\n` +
        `   option-key="name"\n` +
        `   option-value="name"\n` +
        `   name="genre"\n` +
        `   label="Choose any genre"\n` +
        `   placeholder="Select..."\n` +
        `/>\n`
    }
  }
}
</script>
