// Libraries
import { createWebHistory, createRouter } from 'vue-router'

// Pages
import Home from '@/pages/Home.vue'
import Experience from '@/pages/Experience.vue'
import Skills from '@/pages/Skills.vue'
import Principles from '@/pages/Principles.vue'
import Contact from '@/pages/Contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/experience', component: Experience },
  { path: '/skills', component: Skills },
  { path: '/principles', component: Principles },
  { path: '/contact', component: Contact },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
