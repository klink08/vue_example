import { defineColadaLoader } from 'vue-router/experimental/pinia-colada'
import { getFeatureFlags } from '@/api/featureFlags.js'

export const useFeatureFlagsLoader = defineColadaLoader({
  key: ['featureFlags'],
  query: () => getFeatureFlags(),
})
