// frontend/src/main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/main.css' // kalau kamu pakai main.css, kalau tidak ada baris ini boleh dihapus

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
