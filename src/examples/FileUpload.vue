<!-- File upload example -->
<template>
    <div class="mt-16">
        <h3 class="border-b-2 mb-4 -mx-4 p-1 text-grey-darkest">
            File Upload
            <a
                href="https://github.com/janiskelemen/formvuelar/blob/master/src/examples/FileUpload.vue"
                target="_blank"
                class="float-right text-grey-dark hover:text-teal text-xs no-underline"
            >Form Source Code</a>
        </h3>
        <!-- Setup multipart form to support file uploads -->
        <fvl-form :data="form" url="/upload" multipart class="relative">
            <!-- Add source code toggle button (only for example) -->
            <source-toggle @toggle="showSource = !showSource"/>
            <!-- File input component -->
            <fvl-file :file.sync="form.file.avatar" label="Avatar" name="avatar"/>
            <!-- Source code area (only for example) -->
            <source-box :show-source="showSource" :source="source"/>
            <!-- Submit button with upload loader indicator enabled -->
            <fvl-submit loader>Upload</fvl-submit>
        </fvl-form>
    </div>
</template>

<script>
    import { FvlForm, FvlFile, FvlSubmit } from './../formvuelar'

    import SourceToggle from './utilities/SourceToggle.vue'
    import SourceBox from './utilities/SourceBox.vue'

    export default {
        components: {
            FvlForm,
            FvlFile,
            FvlSubmit,
            SourceToggle,
            SourceBox
        },
        data() {
            return {
                form: {
                    file: {
                        avatar: ''
                    }
                },
                showSource: false,
                source:
                    `<fvl-file \n` +
                    `    label="Avatar" \n` +
                    `    name="avatar" \n` +
                    `    :file.sync="form.file.avatar" \n` +
                    `/> \n`
            }
        }
    }
</script>