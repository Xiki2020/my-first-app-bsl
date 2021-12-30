import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/Home.vue'
import WishListPage from '../pages/WishList.vue'
import CartPage from '../pages/Cart.vue'
import PersonalAreaPage from '../components/PersonalArea.vue'

// TODO: https://vueschool.io/articles/vuejs-tutorials/how-to-structure-a-large-scale-vue-js-application/ изучить подходы к структурированию проектов.

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wishlist',
    name: 'ComparisonList',
    component: WishListPage
  },
  {
    path: '/cart',
    name: 'Basket',
    component: CartPage
  },
  {
    path: '/lk',
    name: 'PersonalArea',
    component: PersonalAreaPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
