<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore()

onMounted(async () => {
  await userStore.fetchUser()
})
</script>

<template>
  <main>
    <div>{{ userStore.firstName }}</div>
    <div>{{ userStore.lastName }}</div>
    <div>{{ userStore.fullName }}</div>
  </main>
</template>

<style scoped></style>
