import { defineColadaLoader } from 'vue-router/experimental/pinia-colada'
import { getUserProfile } from '@/api/userProfile.js'

export const useUserProfileLoader = defineColadaLoader({
  key: ['userProfile'],
  query: () => getUserProfile(),
})
