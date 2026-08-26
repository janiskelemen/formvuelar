import { mount } from '@vue/test-utils'
import { FvlForm, FvlInput, FvlSubmit } from '@/formvuelar'

const Harness = {
  components: { FvlForm, FvlInput, FvlSubmit },
  data: () => ({ name: '' }),
  template: `
    <fvl-form :data="{ name }" url="/users">
      <fvl-input v-model="name" name="name" />
      <fvl-submit loader>Save</fvl-submit>
    </fvl-form>
  `,
}

describe('form context', () => {
  it('shares validation, dirty, and loading state through provide/inject', async () => {
    const wrapper = mount(Harness)
    const form = wrapper.getComponent(FvlForm)
    const input = wrapper.getComponent(FvlInput)
    const submit = wrapper.getComponent(FvlSubmit)

    form.vm.errors = { name: ['Name is required'] }
    await wrapper.vm.$nextTick()
    expect(input.classes()).toContain('fvl-has-error')
    expect(input.text()).toContain('Name is required')

    await input.get('input').setValue('Janis')
    expect(wrapper.vm.name).toBe('Janis')
    expect(form.emitted('changed').at(-1)).toEqual([{ fieldName: 'name' }])

    form.vm.isLoading = true
    form.vm.uploadPercentage = 42
    await wrapper.vm.$nextTick()
    expect(submit.get('button').attributes('disabled')).toBeDefined()
    expect(submit.text()).toContain('Save')
  })
})
