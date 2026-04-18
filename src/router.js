// Libraries
import { createWebHistory, createRouter } from 'vue-router'

// Pages
import Home from '@/pages/Home.vue'
import Secondary from '@/pages/Secondary.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/secondary', component: Secondary },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
