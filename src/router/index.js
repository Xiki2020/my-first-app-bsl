import { createRouter, createWebHistory } from 'vue-router'

import CartPage from '@/views/CartPage.vue'
import ForgotPasswordPage from '@/views/LoginPages/ForgotPasswordPage.vue'
import HomePage from '@/views/HomePage.vue'
import NewPasswordPage from '@/views/LoginPages/NewPasswordPage.vue'
import PasswordResetSubmitPage from '@/views/LoginPages/PasswordResetSubmitPage.vue'
import PersonalAreaPage from '@/views/PersonalAreaPage.vue'
import RecoveryCodePage from '@/views/LoginPages/RecoveryCodePage.vue'
import SignInPage from '@/views/LoginPages/SignInPage.vue'
import SignUpPage from '@/views/LoginPages/SignUpPage.vue'
import TempPage from '@/views/TempPage.vue'
import WelcomePage from '@/views/LoginPages/WelcomePage.vue'
import WelcomeBackPage from '@/views/LoginPages/WelcomeBackPage.vue'
import WishListPage from '@/views/WishListPage.vue'

const routes = [
  {
    path: '/cart',
    name: 'CartPage',
    component: CartPage,
    meta: {
      navBar: true,
      roles: ["user",],
      title: "My cart",
    },
  },
  {
    path: '/forgotPassword',
    name: 'ForgotPasswordPage',
    component: ForgotPasswordPage,
    meta: {
      roles: ["guest",],
      title: "Forgot password",
    },
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: {
      navBar: true,
      roles: ["user",],
    },
  },
  {
    path: '/passwordResetSubmit',
    name: 'PasswordResetSubmitPage',
    component: PasswordResetSubmitPage,
    meta: {
      roles: ["guest",],
    },
  },
  {
    path: '/newPassword',
    name: 'NewPasswordPage',
    component: NewPasswordPage,
    meta: {
      roles: ["guest",],
      title: "New password",
    },
  },
  {
    path: '/lk',
    name: 'PersonalAreaPage',
    component: PersonalAreaPage,
    meta: {
      navBar: true,
      roles: ["user",],
      title: "My account",
    },
  },
  {
    path: '/recoveryCode',
    name: 'RecoveryCodePage',
    component: RecoveryCodePage,
    meta: {
      roles: ["guest",],
      title: "Recovery code",
    },
  },
  {
    path: '/signIn',
    name: 'SignInPage',
    component: SignInPage,
    meta: {
      roles: ["guest",],
      title: "Sign In",
    },
  },
  {
    path: '/signUp',
    name: 'SignUpPage',
    component: SignUpPage,
    meta: {
      roles: ["guest",],
      title: "Sign Up",
    },
  },
  {
    path: '/tm',
    name: 'TempPage',
    component: TempPage,
    meta: {
      roles: ["user",],
      title: "Затычка",
    },
  },
  {
    path: '/wishlist',
    name: 'WishListPage',
    component: WishListPage,
    meta: {
      navBar: true,
      roles: ["user",],
      title: "My wishlist",
    },
  },
  {
    path: '/welcome',
    name: 'WelcomePage',
    component: WelcomePage,
    meta: {
      roles: ["guest",],
    },
  },
  {
    path: '/welcomeBack',
    name: 'WelcomeBackPage',
    component: WelcomeBackPage,
    meta: {
      roles: ["guest",],
      title: "Welcome back",
    },
  },
]

const router = createRouter({
  //history: createWebHashHistory(),
  history: createWebHistory(),
  routes,
  role: "guest",
  // mode: 'history',
  // hashbang: false,
  // hash: false,
})

router.beforeEach((to, from, next) => {
  console.log(router.options)
  if (to.meta.roles.find((e) => e === router.options.role)) next()
  else if (router.options.role === "user") next({ name: from.name })
  else next({ name: "WelcomePage" });
});

export default router