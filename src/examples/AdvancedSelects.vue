<!-- Advanced Selects example -->
<template>
  <div>
    <search-select />
    <remote-search-select />
    <remote-api-search-select />
  </div>
</template>

<script>
  import SearchSelect from './selects/SearchSelect.vue'
  import RemoteSearchSelect from './selects/RemoteSearchSelect.vue'
  import RemoteApiSearchSelect from './selects/RemoteApiSearchSelect.vue'


  export default {
    components: {
      SearchSelect,
      RemoteSearchSelect,
      RemoteApiSearchSelect,

    },
    
  }
</script>