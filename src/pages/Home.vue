<script lang="ts" setup>
// Libraries
import { watch } from 'vue'

// Loaders
import { useUserProfileLoader } from '@/loaders/useUserProfile.js'
import { useFeatureFlagsLoader } from '@/loaders/useFeatureFlags.js'

// Stores
import { useUserStore } from '@/stores/user/user.js'
import { useFeatureFlagsStore } from '@/stores/featureFlags/featureFlags.js'

// Components
import Dashboard from '@/components/dashboard/Dashboard.vue'
import Header from '@/components/header/Header.vue'

const userStore = useUserStore()
const featureFlagsStore = useFeatureFlagsStore()

const {
  data: userProfile,
  status: userProfileStatus,
  isLoading: isUserProfileLoading,
} = useUserProfileLoader()
const {
  data: featureFlags,
  status: featureFlagsStatus,
  isLoading: isFeatureFlagsLoading,
} = useFeatureFlagsLoader()

watch(
  userProfile,
  (profile) => {
    if (profile) userStore.setUserProfile(profile)
  },
  { immediate: true }
)

watch(
  featureFlags,
  (flags) => {
    if (flags) featureFlagsStore.setAllFlags(flags)
  },
  { immediate: true }
)
</script>

<template>
  <Header />
  <Dashboard
    v-show="featureFlagsStore.isFeatureFlagEnabled('isDashboardDisplayed')"
  />
</template>

<style scoped></style>
