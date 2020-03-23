<!-- Advanced Selects example -->
<template>
  <div>
    <search-select />
    <remote-search-select />
    <remote-api-search-select />
    <remote-api-search-with-disabled-options-select />
  </div>
</template>

<script>
  import SearchSelect from './selects/SearchSelect.vue'
  import RemoteSearchSelect from './selects/RemoteSearchSelect.vue'
  import RemoteApiSearchSelect from './selects/RemoteApiSearchSelect.vue'
  import RemoteApiSearchWithDisabledOptionsSelect from './selects/RemoteApiSearchWithDisabledOptionsSelect.vue'

  export default {
    components: {
      SearchSelect,
      RemoteSearchSelect,
      RemoteApiSearchSelect,
      RemoteApiSearchWithDisabledOptionsSelect
    }
  }
</script>