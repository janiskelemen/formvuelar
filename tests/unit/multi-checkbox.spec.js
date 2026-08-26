import { mount } from '@vue/test-utils'
import { FvlMultiCheckbox } from '@/formvuelar'

const groups = [
  {
    name: 'users',
    label: 'Users',
    options: [
      { name: 'create', label: 'Create', checked: false },
      { name: 'update', label: 'Update', checked: false },
    ],
  },
]

describe('FvlMultiCheckbox', () => {
  it('emits immutable default and named model values', async () => {
    const wrapper = mount(FvlMultiCheckbox, {
      props: { name: 'permissions', groups, modelValue: [] },
    })

    await wrapper.findAll('input')[1].setValue(true)

    expect(wrapper.emitted('update:modelValue').at(-1)).toEqual([[{ create: true }, { update: false }]])
    expect(wrapper.emitted('update:groups').at(-1)[0][0].options[0].checked).toBe(true)
    expect(groups[0].options[0].checked).toBe(false)
  })
})
