import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/styles/index.scss'
import i18n from '@/i18n'
import SvgIcon from '@/icons'

const app = createApp(App)
const pinia = createPinia()
SvgIcon(app)
app.use(pinia)
app.use(router)
app.use(i18n)
app.mount('#app')