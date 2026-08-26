import { shallowMount } from '@vue/test-utils'
import { FvlDatePicker, FvlDatePickerExtended } from '@/formvuelar'

describe('date picker models', () => {
  it('emits default, start, and end models for ranges', async () => {
    const wrapper = shallowMount(FvlDatePicker, {
      props: {
        name: 'range',
        config: { mode: 'range', dateFormat: 'Y-m-d' },
      },
    })

    await wrapper.setData({ inputvalue: '2026-08-01 - 2026-08-26' })

    expect(wrapper.emitted('update:start').at(-1)).toEqual(['2026-08-01'])
    expect(wrapper.emitted('update:end').at(-1)).toEqual(['2026-08-26'])
    expect(wrapper.emitted('update:modelValue').at(-1)).toEqual([
      { start: '2026-08-01', end: '2026-08-26' },
    ])
  })

  it('keeps named range models on the extended picker', async () => {
    const wrapper = shallowMount(FvlDatePickerExtended, {
      props: { name: 'range' },
    })

    await wrapper.setData({ inputvalue: '2026-08-01 - 2026-08-26' })

    expect(wrapper.emitted('update:start').at(-1)).toEqual(['2026-08-01'])
    expect(wrapper.emitted('update:end').at(-1)).toEqual(['2026-08-26'])
  })
})
