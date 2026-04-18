<script setup>
const goToSecondary = () => {
  this.$router.push('/secondary')
}
</script>

<template>
  <div>Dashboard Component</div>
  <button @click="goToSecondary">Go to Secondary</button>
</template>

<style scoped></style>
