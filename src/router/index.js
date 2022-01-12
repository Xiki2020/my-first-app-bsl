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
      title: "My wishlist",
      navBar: true,
    },
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
    meta: {
      title: "My cart",
      navBar: true,
    },
  },
  {
    path: '/lk',
    name: 'PersonalAreaPage',
    component: PersonalAreaPage,
    meta: {
      title: "My account",
      navBar: true,
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