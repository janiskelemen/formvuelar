<!-- Advanced Selects example -->
<template>
  <div class="mb-16">
    <h3 class="border-b-2 mb-4 -mx-4 p-1 text-gray-800">
      Get Options from Remote and Search via API request
      <a
        href="https://github.com/janiskelemen/formvuelar/blob/master/src/examples/selects/RemoteApiSearchSelect.vue"
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
        :selected.sync="form.user"
        :search-keys="['search']"
        :search-remote="true"
        :lazy-load="true"
        options-url="https://5c113d7d7e18800013bc38d1.mockapi.io/api/v1/users"
        option-key="id"
        option-value="name"
        name="user"
        label="Select a user"
        placeholder="Select user..."
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
        user: null
      },
      showSource: false,
      source:
        `<fvl-search-select  \n` +
        `   :selected.sync="form.user"  \n` +
        `   :search-keys="['search']" \n` +
        `   :search-remote="true" \n` +
        `   :lazy-load="true" \n` +
        `   options-url="https://5c113d7d7e18800013bc38d1.mockapi.io/api/v1/users"  \n` +
        `   option-key="id" \n` +
        `   option-value="name" \n` +
        `   name="user" \n` +
        `   label="Select a user" \n` +
        `   placeholder="Select user..." \n` +
        `/>\n`
    }
  }
}
</script>
