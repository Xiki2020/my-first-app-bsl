import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueToast from 'vue-toast-notification'
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js"

import 'vue-toast-notification/dist/theme-sugar.css'
import "swiper/swiper.scss"
import "swiper/modules/navigation/navigation.scss"
import "swiper/modules/pagination/pagination.scss"

// import AuthLayout from "./layouts/AuthLayout.vue"
// import MainLayout from "./layouts/MainLayout.vue"

const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.use(VueToast)

app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)

app.mount('body')



//default global components
// app.component('AuthLayout', AuthLayout)
// app.component('MainLayout', MainLayout)

