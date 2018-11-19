<!-- File upload example -->
<template>
    <div class="mt-16">
        <h3 class="border-b-2 mb-4 -mx-4 p-1 text-grey-darkest">
            File Upload
            <a href="https://github.com/janiskelemen/formvuelar/blob/master/src/examples/FileUpload.vue" target="_blank" class="float-right text-grey-dark hover:text-teal text-xs no-underline">Form Source Code</a>
        </h3>
        <fvl-form :data="form" url="/upload" class="relative" multipart>
        <source-toggle @toggle="showSource = !showSource"/>

        <fvl-file
            label="Avatar"
            name="avatar"
            :file.sync="form.file.avatar"
        />
        
        <source-box :show-source="showSource" :source="source"/>

        <fvl-submit loader>Upload</fvl-submit>
        </fvl-form>
    </div>
</template>

<script>
import FvlForm from './../components/FvlForm.vue';
import FvlFile from './../components/FvlFile.vue';
import FvlSubmit from './../components/FvlSubmit.vue';

import SourceToggle from './SourceToggle.vue';
import SourceBox from './SourceBox.vue';

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
                name: 'John Doe',
                file: {
                    avatar: ''
                }
            },
            showSource: false,
            source:`
  <fvl-file
    label="Avatar"
    name="avatar"
    :file.sync="form2.file.avatar"
  />
              `
        }
    }
}
</script>