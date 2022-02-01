import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'

import CartPage from '@/views/CartPage.vue'
import ForgotPasswordPage from '@/views/LoginPages/ForgotPasswordPage.vue'
import HomePage from '@/views/HomePage.vue'
import NewPasswordPage from '@/views/LoginPages/NewPasswordPage.vue'
import PasswordResetSubmitPage from '@/views/LoginPages/PasswordResetSubmitPage.vue'
import PersonalAreaPage from '@/views/PersonalAreaPage.vue'
import ProductPage from '@/views/ProductPage.vue'
import ProductListPage from '@/views/ProductListPage.vue'
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
			headerTitle: "My cart",
			layout: 'main-layout',
			navBar: true,
			roles: ["user",],
		},
	},
	{
		path: '/forgot-password',
		name: 'ForgotPasswordPage',
		component: ForgotPasswordPage,
		meta: {
			headerTitle: "Forgot password",
			layout: 'auth-layout',
			roles: ["guest",],
		},
	},
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
		meta: {
			header_search: true,
			layout: 'main-layout',
			navBar: true,
			roles: ["user",],
		},
	},
	{
		path: '/new-password',
		alias: '/new-password',
		name: 'NewPasswordPage',
		component: NewPasswordPage,
		meta: {
			headerTitle: "New password",
			layout: 'auth-layout',
			roles: ["guest",],
		},
	},
	{
		path: '/password-reset-submit',
		name: 'PasswordResetSubmitPage',
		component: PasswordResetSubmitPage,
		meta: {
			layout: 'auth-layout',
			roles: ["guest",],
		},
	},
	{
		path: '/lk',
		name: 'PersonalAreaPage',
		component: PersonalAreaPage,
		meta: {
			headerTitle: "My account",
			layout: 'main-layout',
			navBar: true,
			roles: ["user",],
		},
	},
	{
		path: '/product-list/:category',
		name: 'ProductListPage',
		component: ProductListPage,
		meta: {
			layout: 'main-layout',
			navBar: true,
			roles: ["user",],
		},
	},
	{
		path: '/product-list/product/:id',
		name: 'ProductPage',
		component: ProductPage,
		meta: {
			layout: 'main-layout',
			navBar: true,
			roles: ["user", "guest"],
		},
	},
	{
		path: '/recovery-code',
		name: 'RecoveryCodePage',
		component: RecoveryCodePage,
		meta: {
			headerTitle: "Recovery code",
			layout: 'auth-layout',
			roles: ["guest",],
		},
	},
	{
		path: '/sign-in',
		name: 'SignInPage',
		component: SignInPage,
		meta: {
			headerTitle: "Sign In",
			layout: 'auth-layout',
			roles: ["guest",],
		},
	},
	{
		path: '/sign-up',
		name: 'SignUpPage',
		component: SignUpPage,
		meta: {
			headerTitle: "Sign Up",
			layout: 'auth-layout',
			roles: ["guest",],
		},
	},
	{
		path: '/tm',
		name: 'TempPage',
		component: TempPage,
		meta: {
			headerTitle: "Заглушка",
			layout: 'main-layout',
			navBar: true,
			roles: ["user",],
		},
	},
	{
		path: '/wishlist',
		name: 'WishListPage',
		component: WishListPage,
		meta: {
			headerTitle: "My wishlist",
			layout: 'main-layout',
			navBar: true,
			roles: ["user",],
		},
	},
	{
		path: '/welcome',
		name: 'WelcomePage',
		component: WelcomePage,
		meta: {
			layout: 'auth-layout',
			roles: ["guest",],
		},
	},
	{
		path: '/welcome-back',
		name: 'WelcomeBackPage',
		component: WelcomeBackPage,
		meta: {
			headerTitle: "Welcome back",
			layout: 'auth-layout',
			roles: ["guest",],
		},
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	// history: createWebHistory(),
	routes,
	scrollBehavior() {
		return { top: 0 }
	},
})

router.beforeEach((to, from, next) => {
	if(localStorage.getItem("token")) {
		store.state.user.role = "user"
	} else {
		store.state.user.role = "guest"
	}


	if (to.meta.roles.find((e) => e === store.getters.getRole)) {
		next()
	} else if (store.getters.getRole === "user") {
		next({ name: from.name })
	} else next({ name: "WelcomePage" })
})

export default router