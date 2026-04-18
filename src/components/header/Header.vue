<script setup>
// Libraries
import { onMounted } from 'vue'

// Components
import IconVueLogo from '@/icons/IconVueLogo.vue'

// Stores
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore()

const goToHome = () => {
  this.$router.push('/home')
}

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
    <button onClick="goToHome">Go to Home</button>
  </main>
</template>

<style scoped></style>
