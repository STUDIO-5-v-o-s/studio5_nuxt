import { mount } from '@vue/test-utils'
import Logo from '~/components/brand/Logo.vue'
import LogoNegative from '~/components/brand/LogoNegative.vue'
import LogoAlternative from '~/components/brand/LogoAlternative.vue'

describe('LogoNegative', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LogoNegative)
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Logo)
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('LogoAlternative', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(LogoAlternative)
    expect(wrapper.vm).toBeTruthy()
  })
})
