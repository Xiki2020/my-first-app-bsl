import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/Home.vue'
import WishListPage from '../views/WishList.vue'
import CartPage from '../views/Cart.vue'
import PersonalAreaPage from '../views/PersonalArea.vue'


const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/wishlist',
    name: 'WishListPage',
    component: WishListPage
  },
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage
  },
  {
    path: '/lk',
    name: 'PersonalAreaPage',
    component: PersonalAreaPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
