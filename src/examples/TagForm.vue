<!-- Basic form example -->
<template>
  <div class="mb-16">
    <tag-select />
    <tag-select-or-add />
    <tag-select-or-add-email />
  </div>
</template>

<script>
  import TagSelect from './selects/TagSelect.vue'
  import TagSelectOrAdd from './selects/TagSelectOrAdd.vue'
  import TagSelectOrAddEmail from './selects/TagSelectOrAddEmail.vue'

  export default {
    components: {
      TagSelect,
      TagSelectOrAdd,
      TagSelectOrAddEmail
    }
  }
</script>