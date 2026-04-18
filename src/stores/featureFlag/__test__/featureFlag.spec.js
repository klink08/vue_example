// Libraries
import { describe, beforeEach, it, expect } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

// Stores
import { useFeatureFlagStore } from '@/stores/featureFlag/featureFlag.js'

describe('Scenario: Feature Flags Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('Given: The store is initialized', () => {
    let featureFlagsStore

    beforeEach(() => {
      featureFlagsStore = useFeatureFlagStore()
    })

    describe('When: No actions have been called', () => {
      it('Then: isReady is false', () => {
        expect(featureFlagsStore.isReady).toBe(false)
      })

      it('Then: flags is empty', () => {
        expect(featureFlagsStore.flags).toEqual({})
      })
    })

    describe('When: setAllFlags is called with a flags object', () => {
      beforeEach(() => {
        featureFlagsStore.setAllFlags({ newDashboard: true, darkMode: false })
      })

      it('Then: isReady is true', () => {
        expect(featureFlagsStore.isReady).toBe(true)
      })

      it('Then: The flags are stored', () => {
        expect(featureFlagsStore.flags).toEqual({
          newDashboard: true,
          darkMode: false,
        })
      })
    })

    describe('When: isFeatureFlagEnabled is called for an enabled flag', () => {
      beforeEach(() => {
        featureFlagsStore.setAllFlags({ newDashboard: true })
      })

      it('Then: It returns true', () => {
        expect(featureFlagsStore.isFeatureFlagEnabled('newDashboard')).toBe(
          true
        )
      })
    })

    describe('When: isFeatureFlagEnabled is called for a disabled flag', () => {
      beforeEach(() => {
        featureFlagsStore.setAllFlags({ darkMode: false })
      })

      it('Then: It returns false', () => {
        expect(featureFlagsStore.isFeatureFlagEnabled('darkMode')).toBe(false)
      })
    })

    describe('When: isFeatureFlagEnabled is called for an unknown flag', () => {
      it('Then: It returns undefined', () => {
        expect(
          featureFlagsStore.isFeatureFlagEnabled('unknownFlag')
        ).toBeUndefined()
      })
    })
  })
})
