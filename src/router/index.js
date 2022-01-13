import { createRouter, createWebHashHistory } from 'vue-router'

import CartPage from '@/views/CartPage.vue'
import ForgotPasswordPage from '@/views/LoginPages/ForgotPasswordPage.vue'
import HomePage from '@/views/HomePage.vue'
import PersonalAreaPage from '@/views/PersonalAreaPage.vue'
import RecoveryCodePage from '@/views/LoginPages/RecoveryCodePage.vue'
import SignInPage from '@/views/LoginPages/SignInPage.vue'
import SignUpPage from '@/views/LoginPages/SignUpPage.vue'
import TempPage from '@/views/TempPage.vue'
import WelcomePage from '@/views/LoginPages/WelcomePage.vue'
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
    path: '/forgotPassword',
    name: 'ForgotPasswordPage',
    component: ForgotPasswordPage,
    meta: {
      text: "Forgot password",
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
    path: '/recoveryCode',
    name: 'RecoveryCodePage',
    component: RecoveryCodePage,
    meta: {
      text: "Recovery code",
    },
  },
  {
    path: '/signIn',
    name: 'SignInPage',
    component: SignInPage,
    meta: {
      text: "Sign In",
    },
  },
  {
    path: '/signUp',
    name: 'SignUpPage',
    component: SignUpPage,
    meta: {
      text: "Sign Up",
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