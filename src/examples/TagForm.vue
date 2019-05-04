<!-- Basic form example -->
<template>
  <div class="mb-16">
    <tag-select/>  
    <tag-select-or-add/>  
  </div>
</template>

<script>

  import TagSelect from './selects/TagSelect.vue'
  import TagSelectOrAdd from './selects/TagSelectOrAdd.vue'
      
  export default {
    components: {
      TagSelect,
      TagSelectOrAdd
    }
    
  }
</script>