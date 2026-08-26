import { createEmptyFormContext, FVL_FORM_CONTEXT } from '../formContext'

export const formControl = {
  inject: {
    fvlFormContext: {
      from: FVL_FORM_CONTEXT,
      default: createEmptyFormContext(),
    },
  },
  computed: {
    formIsLoading() {
      return this.fvlFormContext.isLoading
    },
    formUploadPercentage() {
      return this.fvlFormContext.uploadPercentage
    },
  },
  methods: {
    formDirty(name) {
      this.fvlFormContext.dirty(name)
    },
    formGetErrors(name) {
      return this.fvlFormContext.getErrors(name)
    },
    formHasErrors(name) {
      return this.fvlFormContext.hasErrors(name)
    },
  },
}
