import { createApp } from 'vue'
import pinia from '@/stores'
import Notifications from '@kyvg/vue3-notification'
import App from './App.vue'
import router from './router'

import 'bootstrap'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Notifications)

app.mount('#app')
