<!-- Nested Checkbox example -->
<template>
  <div class="mt-16">
    <h3 class="border-b-2 mb-4 -mx-4 p-1 text-grey-darkest">
      Nested Checkbox
      <a
        class="float-right text-grey-dark hover:text-teal text-xs no-underline"
        href="https://github.com/janiskelemen/formvuelar/blob/master/src/examples/NestedCheckbox.vue"
        target="_blank"
      >Full Source Code</a>
    </h3>
    <!-- Setup Nested Checkbox -->
    <fvl-form :data="form" class="relative" url="/basic">
      <!-- Add source code toggle button (only for example) -->
      <source-toggle class="-mt-1" @toggle="toggleSource('permissions')"/>
      <!-- Checkbox component -->
      <fvl-multi-checkbox
        :checked.sync="form.permissions"
        :groups.sync="permissionsStructure"
        label="Set your permissions"
        name="permissions"
      />
      <!-- Source code area (only for example) -->
      <source-box :show-source="showSource == 'permissions'" :source="source.permissions"/>
    </fvl-form>
  </div>
</template>

<script>
  import { FvlForm, FvlMultiCheckbox } from './../formvuelar'

  import SourceToggle from './utilities/SourceToggle.vue'
  import SourceBox from './utilities/SourceBox.vue'

  export default {
    components: {
      FvlForm,
      FvlMultiCheckbox,
      SourceToggle,
      SourceBox
    },
    data() {
      return {
        form: {
          permissions: {}
        },
        permissionsStructure: [
          {
            name: 'all',
            label: 'User permissions',
            checked: false,
            options: [
              {
                name: 'create',
                label: 'Create',
                checked: false
              },
              {
                name: 'update',
                label: 'Update',
                checked: false
              },
              {
                name: 'delete',
                label: 'Delete',
                checked: false
              }
            ]
          }
        ],
        showSource: '',
        source: {
          permissions:
            `<fvl-multi-checkbox \n` +
            `    label="Set your permissions" \n` +
            `    name="permissions" \n` +
            `    :checked.sync="form.permissions" \n` +
            `/>`
        }
      }
    },
    methods: {
      toggleSource(field) {
        this.showSource = this.showSource == field ? '' : field
      }
    }
  }
</script>