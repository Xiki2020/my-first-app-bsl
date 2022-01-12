import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/views/Home.vue'
import WishListPage from '@/views/WishList.vue'
import CartPage from '@/views/Cart.vue'
import PersonalAreaPage from '@/views/PersonalArea.vue'
import Temp from '@/views/Temp.vue'

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
    name: 'Temp',
    component: Temp
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