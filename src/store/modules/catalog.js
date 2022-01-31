export default {
	namespaced: true, // ВКЛЮЧАЙ ИХ ВСЕГДА!

	actions: {
		async fetchCatalog({ commit }) {
			fetch('https://fakestoreapi.com/products')
				.then(res => res.json())
				.then(json => commit('setCatalog', json))
		},
		async fetchСategories({ commit }) {
			fetch('https://fakestoreapi.com/products/categories')
				.then(res => res.json())
				.then(json => commit('setСategories', json))
		},
		async fetchCategory({ commit }, category) {
			commit('setCategory', '');
			fetch(`https://fakestoreapi.com/products/category/${category}`)
				.then(res => res.json())
				.then(json => commit('setCategory', json))
		},
		async fetchProduct({ commit }, id) {
			commit('setProduct', '');
			fetch(`https://fakestoreapi.com/products/${id}`)
				.then(res => res.json())
				.then(json => commit('setProduct', json))
		},
	},

	mutations: {
		setCatalog(state, catalog) {
			state.catalog = catalog;
		},
		setСategories(state, categories) {
			state.categories = categories;
		},
		setCategory(state, category) {
			state.category = category;
		},
		setProduct(state, product) {
			state.product = product;
		},
	},

	state() {
		return {
			catalog: [],
			categories: [],
			category: [],
			product: {},
		};
	},

	getters: {
		getCatalog(state) {
			return state.catalog;
		},
		getFilterCatalog: state => name => {
			if (name.length < 1) return [];

			return state.catalog.filter(product => {
				return product.title.substring(0, name.length).toLowerCase() === name.toLowerCase();
			}).sort((a, b) => (a.title < b.title ? -1 : 1));
		},
		getСategories(state) {
			return state.categories;
		},
		getCategory(state) {
			return state.category;
		},
		getProduct(state) {
			return state.product;
		},
	},
};