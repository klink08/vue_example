<script lang="ts" setup>
const principles = [
  {
    numeral: 'I',
    title: 'Measurement Drives Functionality',
    body: 'Analytics, performance metrics, and detailed key objectives drive a high performing ecosystem.',
  },
  {
    numeral: 'II',
    title: 'Progress Over Perfection',
    body: '',
  },
  {
    numeral: 'III',
    title: 'Clear Communication',
    body: '',
  },
]
</script>

<template>
  <section class="max-w-4xl mx-auto px-8 py-20">
    <h2
      class="font-[var(--font-display)] text-4xl font-light text-[var(--color-ink)] mb-2"
    >
      Principles
    </h2>
    <div class="w-8 h-px bg-[var(--color-bronze)] mb-16"></div>

    <div class="space-y-16">
      <article v-for="p in principles" :key="p.numeral" class="flex gap-10">
        <span
          class="font-[var(--font-display)] text-5xl font-light text-[var(--color-border)] leading-none flex-shrink-0 w-10 pt-1"
        >
          {{ p.numeral }}
        </span>
        <div>
          <h3
            class="font-[var(--font-display)] text-2xl font-light text-[var(--color-ink)] mb-4"
          >
            {{ p.title }}
          </h3>
          <p
            class="text-sm font-light text-[var(--color-muted)] leading-relaxed"
          >
            {{ p.body }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
