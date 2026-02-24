<script setup>
import { useUserStore } from '@/stores/user.js'
import Header from '@/components/Header.vue'
import Dashboard from '@/components/dashboard/index.vue'

const userStore = useUserStore()
</script>

<template>
  <main>
    <Header />
    <Dashboard />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
