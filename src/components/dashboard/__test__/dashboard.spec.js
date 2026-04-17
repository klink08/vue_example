// Libraries
import { describe, beforeEach, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'

// Stores
import { useUserStore } from '@/stores/user.js'

// Components
import Dashboard from '@/components/dashboard/Dashboard.vue'

describe('Scenario: Dashboard', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('Given: The component is mounted on the page', () => {
    let wrapper

    beforeEach(() => {
      wrapper = mount(Dashboard)
    })

    describe('When: The user is loaded', () => {
      it('Then: The first and last names are displayed', () => {
        expect(wrapper.text()).toContain('Dashboard Component')
      })
    })
  })
})
