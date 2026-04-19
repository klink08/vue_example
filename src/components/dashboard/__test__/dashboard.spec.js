// Libraries
import { describe, beforeEach, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

// Components
import Dashboard from '@/components/dashboard/Dashboard.vue'

const mockPush = vi.fn()

vi.mock('vue-router', () => ({
  useRouter: () => ({ push: mockPush }),
}))

describe('Scenario: Dashboard', () => {
  beforeEach(() => {
    mockPush.mockClear()
  })

  describe('Given: The component is mounted on the page', () => {
    let wrapper

    beforeEach(() => {
      wrapper = mount(Dashboard)
    })

    describe('When: The user is loaded', () => {
      it('Then: The page is displayed', () => {
        expect(wrapper.text()).toContain('Dashboard Component')
      })
    })

    describe('When: The "Go to Secondary" button is clicked', () => {
      beforeEach(async () => {
        await wrapper.find('button').trigger('click')
      })

      it('Then: The router navigates to /secondary', () => {
        expect(mockPush).toHaveBeenCalledWith('/vue_example/secondary')
      })
    })
  })
})
