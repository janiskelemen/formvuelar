<template>
  <pre v-if="showSource" v-highlightjs="source" class="m-2">
    <code class="rounded html"></code>
</pre>
</template>

<script>
    export default {
        props: {
            showSource: {
                type: Boolean,
                default: false
            },
            source: {
                type: String,
                default: ''
            }
        }
    }
</script>