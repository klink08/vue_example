<script lang="ts" setup>
const links = [
  {
    label: 'Email',
    value: 'klink008@gmail.com',
    href: 'mailto:klink008@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kellen-link',
    href: 'https://linkedin.com/pub/kellen-link/102/310/87',
  },
  {
    label: 'Resume',
    value: 'visualCV',
    href: 'https://my.visualcv.com/kellen-link/',
  },
  { label: 'Location', value: 'Columbus, Ohio', href: null },
]
</script>

<template>
  <section class="max-w-4xl mx-auto px-8 py-20">
    <h2
      class="font-[var(--font-display)] text-4xl font-light text-[var(--color-ink)] mb-2"
    >
      Contact
    </h2>
    <div class="w-8 h-px bg-[var(--color-bronze)] mb-16"></div>

    <p
      class="text-sm font-light text-[var(--color-muted)] leading-relaxed max-w-md mb-14"
    >
      Open to new opportunities. If you have something worth building, reach
      out.
    </p>

    <div
      class="space-y-0 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]"
    >
      <div
        v-for="link in links"
        :key="link.label"
        class="flex items-baseline justify-between py-5"
      >
        <span
          class="text-xs tracking-[0.2em] uppercase text-[var(--color-bronze)]"
        >
          {{ link.label }}
        </span>
        <a
          v-if="link.href"
          :href="link.href"
          class="text-sm font-light text-[var(--color-ink)] no-underline hover:text-[var(--color-bronze)] transition-colors duration-200"
        >
          {{ link.value }}
        </a>
        <span v-else class="text-sm font-light text-[var(--color-muted)]">
          {{ link.value }}
        </span>
      </div>
    </div>
  </section>
</template>
