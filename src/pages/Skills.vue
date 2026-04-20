<script lang="ts" setup>
const categories = [
  {
    name: 'Libraries/Tooling',
    skills: [
      'Vue 3',
      'React v16',
      'Nuxt',
      'Pinia',
      'Redux',
      'ES6+',
      'Webpack',
      'Tailwind CSS',
    ],
  },
  {
    name: 'User Experience',
    skills: [
      'Figma',
      'Storybook',
      'Component Libraries',
      'Mobile-First Design',
      'Pixel-Perfect Implementation',
    ],
  },
  {
    name: 'Testing',
    skills: [
      'Vitest',
      'Jest',
      'Jasmine',
      'TDD',
      'BDD',
      'Unit',
      'Integration',
      'Snapshot',
    ],
  },
  {
    name: 'Accessibility',
    skills: ['WCAG', 'Semantic HTML', 'ARIA', 'AxE Tools', 'Lighthouse'],
  },
  {
    name: 'Workflow',
    skills: [
      'Agile',
      'Scrum',
      'JIRA',
      'Git',
      'Retrospectives',
      'Remote Collaboration',
    ],
  },
]
</script>

<template>
  <section class="max-w-4xl mx-auto px-8 py-20">
    <h2
      class="font-[var(--font-display)] text-4xl font-light text-[var(--color-ink)] mb-2"
    >
      Skills
    </h2>
    <div class="w-8 h-px bg-[var(--color-bronze)] mb-16"></div>

    <div class="space-y-12">
      <div v-for="category in categories" :key="category.name">
        <h3
          class="text-xs tracking-[0.2em] uppercase text-[var(--color-bronze)] mb-5"
        >
          {{ category.name }}
        </h3>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="skill in category.skills"
            :key="skill"
            class="px-4 py-1.5 border border-[var(--color-border)] text-sm font-light text-[var(--color-muted)] tracking-wide"
          >
            {{ skill }}
          </span>
        </div>
        <div class="mt-10 h-px bg-[var(--color-border)]"></div>
      </div>
    </div>
  </section>
</template>
