import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { piniaPersist } from './plugins/piniaPersist.js';

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia();
app.use(router)

app.use(createPinia())
app.mount('#app')
