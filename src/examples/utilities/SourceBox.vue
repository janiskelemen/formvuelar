<template>
    <pre v-highlightjs="source" v-if="showSource" class="m-2">
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