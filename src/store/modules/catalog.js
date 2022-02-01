import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
	namespaced: true, // ВКЛЮЧАЙ ИХ ВСЕГДА!

	actions: {
		async fetchCatalog({ commit }) {
			// fetch('https://fakestoreapi.com/products')
			// 	.then(res => res.json())
			// 	.then(json => {
			// 		commit('setCatalog', json)
			// 	})
			axios.get('https://fakestoreapi.com/products', {
				headers: {
					'token': localStorage.getItem("token")
				}
			})
				.then((response) => {
					console.log(response)
					commit('setCatalog', response.data)
			 })
		},

		async fetchСategories({ commit }) {
			// try {
			// 	await this.fetchProduct(this.$route.params.id);
			// } catch (error) {
			// 	commit('setError', error)
			// } finally {
			// 	console.log('!!!')
			// }

			axios
				.get('https://fakestoreapi.com/products/categories')
				.then(response => commit('setСategories', response.data))	
		},

		async fetchCategory({ commit }, category) {
			axios
				.get(`https://fakestoreapi.com/products/category/${category}`)
				.then(response => commit('setCategory', response.data))	
		},

		async fetchProduct({ commit }, id) {
			axios
				.get(`https://fakestoreapi.com/products/${id}`)
				.then(response => commit('setProduct', response.data))
		},

		async resetProduct({ commit }) {
			commit('resetProduct')
		},

		async resetCategory({ commit }) {
			commit('resetCategory')
		},
	},

	mutations: {
		setCatalog(state, catalog) {
			state.catalog = catalog
		},
		setСategories(state, categories) {
			state.categories = categories
		},
		setCategory(state, category) {
			state.category = category
		},
		setProduct(state, product) {
			state.product = product
		},
		resetProduct(state) {
			state.product = {}
		},
		resetCategory(state) {
			state.category = []
		}
	},

	state() {
		return {
			catalog: [],
			categories: [],
			category: [],
			product: {},
		}
	},

	getters: {
		getCatalog(state) {
			return state.catalog
		},
		getFilterCatalog: state => name => {
			if (name.length < 1) return []

			return state.catalog.filter(product => {
				return product.title.substring(0, name.length).toLowerCase() === name.toLowerCase()
			}).sort((a, b) => (a.title < b.title ? -1 : 1))
		},
		getСategories(state) {
			return state.categories
		},
		getCategory(state) {
			return state.category
		},
		getProduct(state) {
			return state.product
		},
	},
}