import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import WishListPage from '@/views/WishListPage.vue'
import CartPage from '@/views/CartPage.vue'
import PersonalAreaPage from '@/views/PersonalAreaPage.vue'
import TempPage from '@/views/TempPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: {
      navBar: true,
    },
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
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
    meta: {
      navBar: true,
      title: "My cart",
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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // mode: 'history',
  // hashbang: false,
  // hash: false,
})

export default router