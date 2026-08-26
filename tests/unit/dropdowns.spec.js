import { mount } from '@vue/test-utils'
import { FvlColorPicker, FvlSearchSelect, FvlTagSelect } from '@/formvuelar'

describe('dropdown click handling', () => {
  it('keeps a search select open after clicking its input', async () => {
    const wrapper = mount(FvlSearchSelect, {
      attachTo: document.body,
      props: {
        name: 'country',
        options: [{ id: 1, name: 'Germany' }],
        optionKey: 'id',
        optionValue: 'name',
        searchKeys: ['name'],
      },
    })

    await wrapper.get('.fvl-search-select').trigger('click')

    expect(wrapper.vm.isOpen).toBe(true)
    expect(wrapper.get('.fvl-search-select-dropdown').isVisible()).toBe(true)

    document.body.click()
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.isOpen).toBe(false)
    wrapper.unmount()
  })

  it('opens the color picker after clicking the color preview', async () => {
    const wrapper = mount(FvlColorPicker, {
      attachTo: document.body,
      props: {
        name: 'color',
        modelValue: '#ff0000',
      },
    })

    await wrapper.get('.fvl-color-preview').trigger('click')

    expect(wrapper.vm.isOpen).toBe(true)
    expect(wrapper.get('.fvl-color-picker-dropdown').isVisible()).toBe(true)

    document.body.click()
    await wrapper.vm.$nextTick()

    expect(wrapper.vm.isOpen).toBe(false)
    wrapper.unmount()
  })

  it.each([
    [FvlSearchSelect, { modelValue: null }],
    [FvlTagSelect, { modelValue: [] }],
  ])('does not scroll a missing options list', async (component, modelProps) => {
    const wrapper = mount(component, {
      props: {
        name: 'country',
        options: [],
        optionKey: 'id',
        optionValue: 'name',
        searchKeys: ['name'],
        ...modelProps,
      },
    })

    await wrapper.setData({ isLoading: true })

    expect(wrapper.vm.$refs.options).toBeNull()
    expect(() => wrapper.vm.scrollToIndex(0)).not.toThrow()
  })

  it('uses color patterns that are valid in HTML Unicode Sets mode', () => {
    const wrapper = mount(FvlColorPicker, {
      props: {
        name: 'color',
        modelValue: '#ff0000',
      },
    })

    for (const pattern of Object.values(wrapper.vm.patterns)) {
      expect(() => new RegExp(`^(?:${pattern})$`, 'v')).not.toThrow()
    }
  })
})
