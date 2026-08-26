import { mount } from '@vue/test-utils'
import { FvlFile, FvlMultiFile } from '@/formvuelar'

describe('upload models', () => {
  it('emits a File through the default model', async () => {
    const wrapper = mount(FvlFile, { props: { name: 'avatar' } })
    const file = new File(['avatar'], 'avatar.png', { type: 'image/png' })

    wrapper.vm.handleFileChange({ target: { files: [file] } })
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted('update:modelValue').at(-1)).toEqual([file])
    expect(wrapper.text()).toContain('avatar.png')
  })

  it('emits fresh arrays when files are added and removed', () => {
    const wrapper = mount(FvlMultiFile, { props: { name: 'documents', modelValue: [] } })
    const file = new File(['document'], 'document.txt', { type: 'text/plain' })

    wrapper.vm.handleFileChange({ target: { files: [file] } })
    expect(wrapper.emitted('update:modelValue').at(-1)).toEqual([[file]])

    wrapper.vm.removeFile(0)
    expect(wrapper.emitted('update:modelValue').at(-1)).toEqual([[]])
  })
})
