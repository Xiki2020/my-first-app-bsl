import { createRouter, createWebHashHistory } from 'vue-router'

import CartPage from '@/views/CartPage.vue'
import HomePage from '@/views/HomePage.vue'
import PersonalAreaPage from '@/views/PersonalAreaPage.vue'
import TempPage from '@/views/TempPage.vue'
import WelcomePage from '@/views/WelcomePage.vue'
import WishListPage from '@/views/WishListPage.vue'

const routes = [
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
    meta: {
      navBar: true,
      title: "My cart",
    },
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: {
      navBar: true,
    },
  },
  {
    path: '/lk',
    name: 'PersonalAreaPage',
    component: PersonalAreaPage,
    meta: {
      navBar: true,
      title: "My account",
    },
  },
  {
    path: '/tm',
    name: 'TempPage',
    component: TempPage
  },
  {
    path: '/wishlist',
    name: 'WishListPage',
    component: WishListPage,
    meta: {
      navBar: true,
      title: "My wishlist",
    },
  },
  {
    path: '/welcome',
    name: 'WelcomePage',
    component: WelcomePage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // mode: 'history',
  // hashbang: false,
  // hash: false,
})

export default router