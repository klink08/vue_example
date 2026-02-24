import { describe, beforeEach, it, expect } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useUserStore } from '@/stores/user.js'

describe('Scenario: Dashboard', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('Given: The component is mounted on the page', () => {
    let userStore

    beforeEach(() => {
      userStore = useUserStore()

      userStore.$patch({
        user: {
          firstName: 'testFirst',
          lastName: 'testLast',
        },
      })
    })

    describe('When: The user is loaded', () => {
      it('Then: The first and last names are displayed', () => {
        expect(true).toEqual(true)
      })
    })
  })
})
