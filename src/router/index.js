import { createRouter, createWebHashHistory } from 'vue-router'

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
		path: '/forgot-password',
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
		path: '/recovery-code',
		name: 'RecoveryCodePage',
		component: RecoveryCodePage,
		meta: {
			roles: ["guest",],
			title: "Recovery code",
		},
	},
	{
		path: '/sign-in',
		name: 'SignInPage',
		component: SignInPage,
		meta: {
			roles: ["guest",],
			title: "Sign In",
		},
	},
	{
		path: '/sign-up',
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
			title: "Заглушка",
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
		path: '/welcome-back',
		name: 'WelcomeBackPage',
		component: WelcomeBackPage,
		meta: {
			roles: ["guest",],
			title: "Welcome back",
		},
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	// history: createWebHistory(),
	routes,
	// role: "guest",
	// mode: 'history',
	// hashbang: false,
	// hash: false,
})

router.beforeEach((to, from, next) => {
	if (!window.localStorage.getItem("logIn")) window.localStorage.setItem("logIn", "guest");

	if (to.meta.roles.find((e) => e === window.localStorage.getItem("logIn"))) {
		next()
	} else if (window.localStorage.getItem("logIn") === "user") {
		next({ name: from.name })
	} else next({ name: "WelcomePage" });
});

export default router