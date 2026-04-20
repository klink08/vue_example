<script lang="ts" setup>
const roles = [
  {
    title: 'Lead Software Engineer 2',
    company: 'BestEgg',
    period: 'May 2024 – Present',
    points: [
      'Developed UX design system with typography, color theming, and sprite optimization',
      'Enhanced web performance metrics including load time and hero element rendering',
      'Established analytics infrastructure for feature tracking',
      'Implemented feature flag management system',
      'Adopted Gherkin syntax for improved test maintenance',
    ],
  },
  {
    title: 'Sr Software Developer & Project Team Lead',
    company: "Victoria's Secret",
    period: 'Nov 2017 – May 2024',
    points: [
      'Led checkout team managing high-volume transactions',
      'Architected modular design system adopted across the organization',
      'Deployed automated customer support chat platform',
      'Spearheaded loyalty program rollout',
      'Managed a 4-person team through project grooming and estimation',
    ],
  },
  {
    title: 'Software Consultant',
    company: "Careworks Tech (Victoria's Secret Contract)",
    period: 'Jun 2017 – Nov 2017',
    points: [
      'Modernized domestic online management platform',
      'Created dynamic CMS-driven components',
    ],
  },
  {
    title: 'Web Application Developer',
    company: 'Netjets (via Information Control Company)',
    period: 'Jun 2013 – Jun 2017',
    points: [
      'Full-stack Grails and Angular development with a focus on timezone handling',
      'Ruby Cucumber testing for application reliability',
    ],
  },
  {
    title: 'Junior Application Developer',
    company: 'Teachscape (via Information Control Company)',
    period: 'Nov 2013 – May 2014',
    points: [
      'Built state management for teacher review workflows using Grails and Angular',
    ],
  },
]
</script>

<template>
  <section class="max-w-4xl mx-auto px-8 py-20">
    <h2
      class="font-[var(--font-display)] text-4xl font-light text-[var(--color-ink)] mb-2"
    >
      Experience
    </h2>
    <div class="w-8 h-px bg-[var(--color-bronze)] mb-16"></div>

    <div class="space-y-16">
      <article v-for="role in roles" :key="role.company + role.period">
        <div
          class="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-4"
        >
          <div>
            <h3
              class="font-[var(--font-display)] text-2xl font-light text-[var(--color-ink)]"
            >
              {{ role.title }}
            </h3>
            <p class="text-sm text-[var(--color-bronze)] tracking-wide mt-0.5">
              {{ role.company }}
            </p>
          </div>
          <span
            class="text-xs tracking-widest uppercase text-[var(--color-muted)] whitespace-nowrap"
          >
            {{ role.period }}
          </span>
        </div>
        <ul class="space-y-2 pl-0 list-none">
          <li
            v-for="point in role.points"
            :key="point"
            class="flex gap-3 text-sm font-light text-[var(--color-muted)] leading-relaxed"
          >
            <span
              class="mt-2.5 w-1 h-1 rounded-full bg-[var(--color-bronze)] flex-shrink-0"
            ></span>
            {{ point }}
          </li>
        </ul>
        <div class="mt-10 h-px bg-[var(--color-border)]"></div>
      </article>
    </div>

    <div class="mt-12">
      <h3
        class="font-[var(--font-display)] text-2xl font-light text-[var(--color-ink)] mb-1"
      >
        Education
      </h3>
      <p class="text-sm text-[var(--color-bronze)] tracking-wide">
        University of Toledo
      </p>
      <p class="text-sm font-light text-[var(--color-muted)] mt-1">
        Computer Science Engineering Technology &mdash; Aug 2008 – May 2013
      </p>
    </div>
  </section>
</template>
