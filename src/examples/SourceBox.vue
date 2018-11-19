<template>
<pre
    v-if="showSource"
    class="m-2"
    v-highlightjs="source"
>
    <code class="rounded html"></code>
</pre>
</template>

<script>
export default {
    props: ['showSource', 'source']
}
</script>