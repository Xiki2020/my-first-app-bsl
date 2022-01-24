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
			appNav: true,
			headerTitle: "My cart",
			roles: ["user",],
		},
	},
	{
		path: '/forgot-password',
		name: 'ForgotPasswordPage',
		component: ForgotPasswordPage,
		meta: {
			headerTitle: "Forgot password",
			roles: ["guest",],
		},
	},
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
		meta: {
			appNav: true,
			header_search: true,
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
			roles: ["guest",],
		},
	},
	{
		path: '/password-reset-submit',
		name: 'PasswordResetSubmitPage',
		component: PasswordResetSubmitPage,
		meta: {
			roles: ["guest",],
		},
	},
	{
		path: '/lk',
		name: 'PersonalAreaPage',
		component: PersonalAreaPage,
		meta: {
			appNav: true,
			headerTitle: "My account",
			roles: ["user",],
		},
	},

	{
		path: '/product-list',
		name: 'ProductListPage',
		component: ProductListPage,
		meta: {
			headerTitle: "Product list",
			roles: ["user",],
		},
	},
	{
		path: '/product',
		name: 'ProductPage',
		component: ProductPage,
		meta: {
			roles: ["user",],
		},
	},
	{
		path: '/recovery-code',
		name: 'RecoveryCodePage',
		component: RecoveryCodePage,
		meta: {
			headerTitle: "Recovery code",
			roles: ["guest",],
		},
	},
	{
		path: '/sign-in',
		name: 'SignInPage',
		component: SignInPage,
		meta: {
			headerTitle: "Sign In",
			roles: ["guest",],
		},
	},
	{
		path: '/sign-up',
		name: 'SignUpPage',
		component: SignUpPage,
		meta: {
			headerTitle: "Sign Up",
			roles: ["guest",],
		},
	},
	{
		path: '/tm',
		name: 'TempPage',
		component: TempPage,
		meta: {
			headerTitle: "Заглушка",
			roles: ["user",],
		},
	},
	{
		path: '/wishlist',
		name: 'WishListPage',
		component: WishListPage,
		meta: {
			appNav: true,
			headerTitle: "My wishlist",
			roles: ["user",],
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
		path: '/welcome-back',
		name: 'WelcomeBackPage',
		component: WelcomeBackPage,
		meta: {
			headerTitle: "Welcome back",
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
	if (to.meta.roles.find((e) => e === store.getters.getRole)) {
		next()
	} else if (store.getters.getRole === "user") {
		next({ name: from.name })
	} else next({ name: "WelcomePage" });
});

export default router