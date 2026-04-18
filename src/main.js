// Libraries
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Project Files
import '@/assets/main.css'
import App from '@/App.vue'
import { router } from '@/router.js'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)

createApp(App).use(router).mount('#app')
