import { mount } from '@vue/test-utils'
import {
  FvlCheckbox,
  FvlInput,
  FvlRadio,
  FvlSelect,
  FvlSlider,
  FvlSwitch,
  FvlTextSwitch,
  FvlTextarea,
} from '@/formvuelar'

describe('Vue 3 model contracts', () => {
  it.each([
    [FvlInput, 'input', {}, 'hello'],
    [FvlTextarea, 'textarea', {}, 'hello'],
    [FvlSlider, 'input', {}, '5'],
  ])('emits update:modelValue for text-like controls', async (component, selector, props, value) => {
    const wrapper = mount(component, { props: { name: 'field', ...props } })
    await wrapper.get(selector).setValue(value)
    expect(wrapper.emitted('update:modelValue').at(-1)).toEqual([value])
  })

  it.each([FvlCheckbox, FvlSwitch, FvlTextSwitch])(
    'emits update:modelValue for boolean controls',
    async (component) => {
      const wrapper = mount(component, { props: { name: 'field' } })
      await wrapper.get('input').setValue(true)
      expect(wrapper.emitted('update:modelValue').at(-1)).toEqual([true])
    }
  )

  it('uses the default model for selects', async () => {
    const wrapper = mount(FvlSelect, {
      props: { name: 'color', options: { red: 'Red', blue: 'Blue' } },
    })
    await wrapper.get('select').setValue('blue')
    expect(wrapper.emitted('update:modelValue').at(-1)).toEqual(['blue'])
  })

  it('uses the default model for radios', async () => {
    const wrapper = mount(FvlRadio, {
      props: { name: 'choice', options: { first: 'First', second: 'Second' } },
    })
    await wrapper.findAll('input')[1].setValue()
    expect(wrapper.emitted('update:modelValue').at(-1)).toEqual(['second'])
  })

  it('renders safely without a form parent', () => {
    expect(() => mount(FvlInput, { props: { name: 'standalone' } })).not.toThrow()
  })
})
