<template>
  <div :class="{ 'fvl-has-error': formHasErrors(name) }" class="fvl-multi-checkbox-wrapper">
    <label v-if="label" :class="labelClass" :for="id ? id : name" class="fvl-multi-checkbox-label">
      <span v-html="label"></span>
      <slot name="label_suffix" />
    </label>
    <div v-for="group in localGroups" :key="group.name">
      <fvl-checkbox
        :model-value="groupAllChecked(group)"
        :label="group.label"
        :name="group.name"
        :readonly="readonly"
        :disabled="disabled"
        :class="{
          'fvl-multi-checkbox-all-checked': groupAllChecked(group),
          'fvl-multi-checkbox-any-checked': groupAnyChecked(group),
        }"
        class="fvl-multi-checkbox"
        @update:model-value="toggleChildren(group, $event)"
      />
      <div v-for="nestedOption in group.options" :key="nestedOption.name" class="fvl-multi-checkbox-group">
        <fvl-checkbox
          :model-value="nestedOption.checked"
          :label="nestedOption.label"
          :name="nestedOption.name"
          :required="required"
          :readonly="readonly"
          :disabled="disabled"
          class="fvl-multi-checkbox-nested"
          @update:model-value="updateNested(group, nestedOption, $event)"
        />
      </div>
    </div>
    <slot name="hint" />
    <slot :errors="formGetErrors(name)" name="errors">
      <validation-errors :errors="formGetErrors(name)" />
    </slot>
  </div>
</template>

<script>
  import ValidationErrors from './FvlErrors.vue'
  import FvlCheckbox from './FvlCheckbox.vue'
  import { formControl } from './mixins/formControl'

  const cloneGroups = (groups) => groups.map((group) => ({
    ...group,
    options: group.options.map((option) => ({ ...option })),
  }))

  export default {
    components: {
      ValidationErrors,
      FvlCheckbox,
    },
    mixins: [formControl],
    emits: ['update:groups', 'update:modelValue'],
    props: {
      modelValue: {
        type: Array,
        default: () => [],
      },
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
      return {
        localGroups: this.groupsWithModelValue(this.groups, this.modelValue),
      }
    },
    watch: {
      groups: {
        deep: true,
        handler(groups) {
          this.localGroups = this.groupsWithModelValue(groups, this.modelValue)
        },
      },
      modelValue: {
        deep: true,
        handler(modelValue) {
          this.localGroups = this.groupsWithModelValue(this.localGroups, modelValue)
        },
      },
    },
    computed: {
      values() {
        return this.localGroups.flatMap((group) =>
          group.options.map((field) => ({ [field.name]: Boolean(field.checked) }))
        )
      },
    },
    methods: {
      groupsWithModelValue(groups, modelValue) {
        const values = Object.assign({}, ...(Array.isArray(modelValue) ? modelValue : []))
        return cloneGroups(groups).map((group) => ({
          ...group,
          options: group.options.map((option) => ({
            ...option,
            checked: Object.prototype.hasOwnProperty.call(values, option.name)
              ? Boolean(values[option.name])
              : Boolean(option.checked),
          })),
        }))
      },
      toggleChildren(group, checked) {
        group.options = group.options.map((option) => ({ ...option, checked }))
        this.emitState()
      },
      updateNested(group, nestedOption, checked) {
        nestedOption.checked = checked
        this.emitState()
      },
      groupAllChecked(group) {
        return group.options.length > 0 && group.options.every((option) => option.checked)
      },
      groupAnyChecked(group) {
        return group.options.some((option) => option.checked)
      },
      emitState() {
        const groups = cloneGroups(this.localGroups).map((group) => ({
          ...group,
          checked: this.groupAllChecked(group),
        }))
        this.$emit('update:modelValue', this.values)
        this.$emit('update:groups', groups)
        this.formDirty(this.name)
      },
    },
  }
</script>
