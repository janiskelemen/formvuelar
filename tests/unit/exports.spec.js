import * as FormVuelar from '@/formvuelar'

describe('public exports', () => {
  it('keeps all named component exports', () => {
    expect(Object.keys(FormVuelar).sort()).toEqual(
      [
        'FvlCheckbox',
        'FvlColorPicker',
        'FvlDatePicker',
        'FvlDatePickerExtended',
        'FvlDropzone',
        'FvlFile',
        'FvlForm',
        'FvlImage',
        'FvlInput',
        'FvlMultiCheckbox',
        'FvlMultiFile',
        'FvlRadio',
        'FvlSearchSelect',
        'FvlSelect',
        'FvlSlider',
        'FvlSubmit',
        'FvlSwitch',
        'FvlTagSelect',
        'FvlTextSwitch',
        'FvlTextarea',
      ].sort()
    )
  })
})
