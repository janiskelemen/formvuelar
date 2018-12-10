import { shallowMount } from '@vue/test-utils'
import FvlForm from '@/components/FvlForm.vue'


describe('FvlForm.vue', () => {
  it('is a Vue instance', () => {
    const url = '/test'
    const wrapper = shallowMount(FvlForm, {
      propsData: { url }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
