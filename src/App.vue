<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b border-[var(--color-border)] px-8 py-6">
      <nav class="max-w-4xl mx-auto flex items-center justify-between">
        <RouterLink
          to="/"
          class="font-[var(--font-display)] text-xl tracking-[0.2em] uppercase text-[var(--color-ink)] no-underline"
        >
          Kellen Link
        </RouterLink>
        <ul class="flex gap-10 list-none m-0 p-0">
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="text-xs tracking-[0.15em] uppercase text-[var(--color-muted)] no-underline transition-colors duration-200 hover:text-[var(--color-ink)]"
              active-class="text-[var(--color-ink)]"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="flex-1">
      <RouterView />
    </main>

    <footer class="border-t border-[var(--color-border)] px-8 py-6 text-center">
      <p class="text-xs tracking-widest uppercase text-[var(--color-muted)]">
        Columbus, Ohio
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
const links = [
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/principles', label: 'Principles' },
  { to: '/contact', label: 'Contact' },
]
</script>
