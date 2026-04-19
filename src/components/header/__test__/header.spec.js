// Libraries
import { describe, beforeEach, afterEach, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'

// Stores
import { useUserStore } from '@/stores/user/user.js'

// Components
import Header from '@/components/header/Header.vue'

const mockPush = vi.fn()

vi.mock('vue-router', () => ({
  useRouter: () => ({ push: mockPush }),
}))

describe('Scenario: Header', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.useFakeTimers()
    mockPush.mockClear()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  describe('Given: The component is mounted on the page', () => {
    let userStore
    let wrapper

    beforeEach(async () => {
      userStore = useUserStore()
      wrapper = mount(Header)
    })

    describe('When: The page loads', () => {
      it('Then: The default values are displayed', () => {
        expect(wrapper.text()).toContain('TestFirst TestLast')
      })
    })

    describe('When: The user is loaded', () => {
      beforeEach(async () => {
        userStore = useUserStore()
        userStore.setUserProfile({ firstName: 'Kellen', lastName: 'Link' })
        await wrapper.vm.$nextTick()
      })

      it('Then: The first and last names are displayed', () => {
        expect(wrapper.text()).toContain('Kellen Link')
      })
    })
  })
})
