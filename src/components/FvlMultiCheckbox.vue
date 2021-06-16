<template>
  <div :class="{ 'fvl-has-error': $parent.hasErrors(name) }" class="fvl-multi-checkbox-wrapper">
    <label v-if="label" :class="labelClass" :for="id ? id : name" class="fvl-multi-checkbox-label">
      <span v-html="label"></span>
      <slot name="label_suffix" />
    </label>
    <div v-for="group in allgroups" :key="group.name">
      <fvl-checkbox
        :label="group.label"
        :name="group.name"
        :class="{
          'fvl-multi-checkbox-all-checked': groupAllChecked(group),
          'fvl-multi-checkbox-any-checked': groupAnyChecked(group),
        }"
        class="fvl-multi-checkbox"
        @click.prevent.native="toggleChildren(group)"
      />
      <div v-for="nestedOption in group.options" :key="nestedOption.name" class="fvl-multi-checkbox-group">
        <fvl-checkbox
          :checked.sync="nestedOption.checked"
          :label="nestedOption.label"
          :name="nestedOption.name"
          class="fvl-multi-checkbox-nested"
        />
      </div>
    </div>
    <slot name="hint" />
    <slot :errors="$parent.getErrors(name)" name="errors">
      <validation-errors :errors="$parent.getErrors(name)" />
    </slot>
  </div>
</template>

<script>
  import ValidationErrors from './FvlErrors.vue'
  import FvlCheckbox from './FvlCheckbox.vue'
  import _every from 'lodash/every'
  import _filter from 'lodash/filter'
  import _forEach from 'lodash/forEach'
  export default {
    components: {
      ValidationErrors,
      FvlCheckbox,
    },
    props: {
      label: {
        type: String,
        required: false,
        default: null,
      },
      name: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: false,
        default: null,
      },
      groups: {
        type: Array,
        default: () => [],
      },
      fieldClass: {
        type: String,
        required: false,
        default: null,
      },
      labelClass: {
        type: String,
        required: false,
        default: null,
      },
      required: {
        type: Boolean,
        required: false,
        default: false,
      },
      readonly: {
        type: Boolean,
        required: false,
        default: false,
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    data() {
      return {}
    },
    computed: {
      allgroups() {
        return this.groups
      },
      values() {
        let values = []
        _forEach(this.allgroups, function (group) {
          _forEach(group.options, function (field) {
            values.push({ [field.name]: field.checked })
          })
        })
        return values
      },
    },
    methods: {
      toggleChildren(group) {
        let state = !_every(group.options, 'checked')
        _forEach(group.options, function (value) {
          value.checked = state
        })
      },
      groupAllChecked(group) {
        let allChecked = _every(group.options, 'checked')
        group.checked = allChecked
        return allChecked
      },
      groupAnyChecked(group) {
        this.$emit('update:checked', this.values)
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
      },
    },
  }
</script>

