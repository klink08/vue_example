<script lang="ts" setup>
// Libraries
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

// Components
import IconVueLogo from '@/icons/IconVueLogo.vue'

// Stores
import { useUserStore } from '@/stores/user/user.js'

const userStore = useUserStore()
</script>

<template>
  <div>First Name: {{ userStore.firstName }}</div>
  <div>Last Name: {{ userStore.lastName }}</div>
  <div>Full Name: {{ userStore.fullName }}</div>
</template>

<style scoped></style>
