import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../views/Home.vue'
import WishListPage from '../views/WishList.vue'
import CartPage from '../views/Cart.vue'
import PersonalAreaPage from '../views/PersonalArea.vue'
import Temp from '../views/Temp.vue'


const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
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
  {
    path: '/tm',
    name: 'Temp',
    component: Temp
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  let url = {
    'WishListPage': 'wishlist',
    'CartPage': 'cart',
    'PersonalAreaPage': 'account',
  }
  window.localStorage.setItem('url', url[to.name]);
  next(true);
});

export default router
