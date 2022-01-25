export default {
	namespaced: true,
	actions: {
		addProduct({ commit }, product) {
			commit('setProduct', product);
		},

		changeCountProduct({ commit }, obj) {
			commit('setCountProduct', obj);
		},
	},
	mutations: {
		setProduct(state, product) {
			let findProduct = state.cart.find(el => el.id === product.id);
			if (findProduct) {
				findProduct.count += 1;
				return;
			}
			product.count = 1;
			state.cart.push(product);
		},

		setCountProduct(state, obj) {
			let index;
			let product = state.cart.find((el, i) => {
				if (el.id === obj.id) {
					index = i;
					return el;
				}
			});
			if (obj.action === 'add') {
				product.count += 1;
			} else if (product.count <= 1) {
				state.cart.splice(index, 1);
			} else {
				product.count -= 1;
			}
		},
	},
	state() {
		return {
			cart: [],
		}
	},
	getters: {
		getCart(state) {
			return state.cart;
		},

		getCountProducts(state) {
			let count = 0;
			state.cart.forEach(product => {
				count += product.count;
			});
			return count;
		},

		getPriceCart(state) {
			let price = 0;
			state.cart.forEach(product => {
				price += product.count * product.price;
			});
			return price;
		},

		getFilterProducts: state => name => {
			return state.cart.filter(product => {
				return product.name.substring(0, name.length).toLowerCase() === name.toLowerCase()
			}).sort((a, b) => (a.name < b.name ? -1 : 1));
		},
	},
};