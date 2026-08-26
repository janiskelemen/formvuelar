export const FVL_FORM_CONTEXT = Symbol('formvuelar-form-context')

export function createEmptyFormContext() {
  return {
    errors: {},
    isLoading: false,
    uploadPercentage: 0,
    dirty: () => {},
    getErrors: () => [],
    hasErrors: () => false,
  }
}
