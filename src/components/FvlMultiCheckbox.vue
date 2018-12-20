<template>
  <div :class="{'fvl-has-error' : this.$parent.hasErrors(name)}" class="fvl-multi-checkbox-wrapper">
    
    <div v-for="group in groups" :key="group.name">
        <fvl-checkbox
          :checked.sync="group.checked"
          :label="group.label"
          :name="group.name"
          :class="{'fvl-multi-checkbox-all-checked': groupAllChecked(group), 'fvl-multi-checkbox-any-checked': groupAnyChecked(group)}"
          class="w-full lg:w-1/2"
        />
        <div v-for="nestedOption in group.options" :key="nestedOption.name">
            <fvl-checkbox
              :checked.sync="nestedOption.checked"
              :label="nestedOption.label"
              :name="nestedOption.name+[]"
              class="w-full lg:w-1/2 pl-12"
            />
        </div>
    </div>
    <!-- <label v-if="label" :class="labelClass" :for="id ? id : name" class="fvl-checkbox-label" v-html="label"/>
    <slot name="hint"/>
    <slot :errors="this.$parent.getErrors(name)" name="errors">
      <validation-errors :errors="this.$parent.getErrors(name)"/>
    </slot> -->
  </div>
</template>

<script>
  import ValidationErrors from './FvlErrors.vue'
  import FvlCheckbox from './FvlCheckbox.vue'
  import _every from 'lodash/every'
  import _filter from 'lodash/filter'
  export default {
    components: {
      ValidationErrors,
      FvlCheckbox
    },
    props: {
      label: {
        type: String,
        required: false,
        default: null
      },
      name: {
        type: String,
        required: true
      },
      id: {
        type: String,
        required: false,
        default: null
      },
      groups: {
        type: Array,
        default: () => []
      },
      fieldClass: {
        type: String,
        required: false,
        default: null
      },
      labelClass: {
        type: String,
        required: false,
        default: null
      },
      required: {
        type: Boolean,
        required: false,
        default: false
      },
      readonly: {
        type: Boolean,
        required: false,
        default: false
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    data() {
      return {}
    },
    methods: {
      groupAllChecked(group){
        let allChecked = _every(group.options, 'checked')
        group.checked = allChecked
        return allChecked
      },
      groupAnyChecked(group){
        return _filter(group.options, 'checked').length
      },
      dirty(name) {
        this.$parent.errors[name] = false
      },

      getErrors(name) {
        return this.$parent.errors[name] ? this.$parent.errors[name] : []
      },
      hasErrors(name) {
        return this.$parent.errors[name] && this.$parent.errors[name] !== [] ? true : false
      }
    }
  }
</script>

