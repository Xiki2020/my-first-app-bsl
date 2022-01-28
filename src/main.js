import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import AuthLayout from "@/layouts/AuthLayout.vue"
import MainLayout from "@/layouts/MainLayout.vue"

const app = createApp(App)

app.use(router)
app.use(store)

//default global components
app.component('AuthLayout', AuthLayout)
app.component('MainLayout', MainLayout)

app.mount('body')