<script setup>
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user.js'
import IconVueLogo from '@/icons/IconVueLogo.vue'

const userStore = useUserStore()

onMounted(async () => {
  await userStore.fetchUser()
})
</script>

<template>
  <main>
    <IconVueLogo />
    <div>First Name: {{ userStore.firstName }}</div>
    <div>Last Name: {{ userStore.lastName }}</div>
    <div>Full Name: {{ userStore.fullName }}</div>
  </main>
</template>

<style scoped></style>
