import fakeApiService from '@/services/FakeApiService.js'

export default {
	namespaced: true, 

	actions: {
		accioCatalog({ commit }) {
			fakeApiService.getProducts()
				.then(response => commit('setCatalog', response.data))
		},

		accioСategories({ commit }) {
			fakeApiService.getСategories()
				.then(response => commit('setСategories', response.data))	
		},

		accioProductsCategory({ commit }, category) {
			fakeApiService.getProductsCategory(category)
				.then(response => commit('setProductsCategory', response.data))	
		},

		accioProduct({ commit }, id) {
			fakeApiService.getProduct(id)
				.then(response => commit('setProduct', response.data))
		},

		resetProduct({ commit }) {
			commit('resetProduct')
		},

		resetProductsCategory({ commit }) {
			commit('resetProductsCategory')
		},
	},

	mutations: {
		setCatalog(state, catalog) {
			state.catalog = catalog
		},
		setСategories(state, categories) {
			state.categories = categories
		},
		setProductsCategory(state, products) {
			state.productsCategory = products
		},
		setProduct(state, product) {
			state.product = product
		},
		resetProduct(state) {
			state.product = {}
		},
		resetProductsCategory(state) {
			state.category = []
		}
	},

	state() {
		return {
			catalog: [],
			categories: [],
			productsCategory: [],
			product: {},
		}
	},

	getters: {
		getCatalog(state) {
			return state.catalog
		},
		getFoundProducts: state => searchVal => {
			if (searchVal.length < 1) return []

			return state.catalog.filter(product => {
				return product.title.toLowerCase().includes(searchVal.toLowerCase())
			}).sort((a, b) => (a.title < b.title ? -1 : 1))
		},
		getСategories(state) {
			return state.categories
		},
		getProductsCategory(state) {
			return state.productsCategory
		},
		getProduct(state) {
			return state.product
		},
	},
}