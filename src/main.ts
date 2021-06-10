import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import App from './App.vue'

import store from './store/index'
import router from './router'

import 'element-plus/lib/theme-chalk/index.css'
import './style/tailwind.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
