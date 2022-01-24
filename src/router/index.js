import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'

import CartPage from '@/views/CartPage.vue'
import ForgotPasswordPage from '@/views/LoginPages/ForgotPasswordPage.vue'
import HomePage from '@/views/HomePage.vue'
import NewPasswordPage from '@/views/LoginPages/NewPasswordPage.vue'
import PasswordResetSubmitPage from '@/views/LoginPages/PasswordResetSubmitPage.vue'
import PersonalAreaPage from '@/views/PersonalAreaPage.vue'
import ProductPage from '@/views/ProductPage.vue'
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
			roles: ["user",],
			headerTitle: "My cart",
		},
	},
	{
		path: '/forgot-password',
		name: 'ForgotPasswordPage',
		component: ForgotPasswordPage,
		meta: {
			roles: ["guest",],
			headerTitle: "Forgot password",
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
		path: '/password-reset-submit',
		name: 'PasswordResetSubmitPage',
		component: PasswordResetSubmitPage,
		meta: {
			roles: ["guest",],
		},
	},
	{
		path: '/new-password',
		alias: '/new-password',
		name: 'NewPasswordPage',
		component: NewPasswordPage,
		meta: {
			roles: ["guest",],
			headerTitle: "New password",
		},
	},
	{
		path: '/lk',
		name: 'PersonalAreaPage',
		component: PersonalAreaPage,
		meta: {
			appNav: true,
			roles: ["user",],
			headerTitle: "My account",
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
			roles: ["guest",],
			headerTitle: "Recovery code",
		},
	},
	{
		path: '/sign-in',
		name: 'SignInPage',
		component: SignInPage,
		meta: {
			roles: ["guest",],
			headerTitle: "Sign In",
		},
	},
	{
		path: '/sign-up',
		name: 'SignUpPage',
		component: SignUpPage,
		meta: {
			roles: ["guest",],
			headerTitle: "Sign Up",
		},
	},
	{
		path: '/tm',
		name: 'TempPage',
		component: TempPage,
		meta: {
			roles: ["user",],
			headerTitle: "Заглушка",
		},
	},
	{
		path: '/wishlist',
		name: 'WishListPage',
		component: WishListPage,
		meta: {
			appNav: true,
			roles: ["user",],
			headerTitle: "My wishlist",
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
			roles: ["guest",],
			headerTitle: "Welcome back",
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