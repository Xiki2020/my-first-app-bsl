import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

// import AuthLayout from "./layouts/AuthLayout.vue"
// import MainLayout from "./layouts/MainLayout.vue"

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.mount('body')

//default global components
// app.component('AuthLayout', AuthLayout)
// app.component('MainLayout', MainLayout)

