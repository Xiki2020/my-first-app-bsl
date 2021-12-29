import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ComparisonList from '../components/ComparisonList.vue'
import Basket from '../components/Basket.vue'
import PersonalArea from '../components/PersonalArea.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/wishlist',
    name: 'ComparisonList',
    component: ComparisonList
  },
  {
    path: '/cart',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/lk',
    name: 'PersonalArea',
    component: PersonalArea
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
