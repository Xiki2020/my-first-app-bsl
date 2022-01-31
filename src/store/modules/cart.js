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
			let foundedProduct = state.products.find(el => el.id === product.id);

			if (foundedProduct) {
				foundedProduct.count += 1;
				return;
			}

			product.count = 1;
			state.products.push(product);
		},

		// obj object
		// obj.id {string} - id продукта
		// obj.action {string} - тип действия
		setCountProduct (state, obj) {
			let index;
			let product = state.products.find((el, i) => {
				if (el.id === obj.id) {
					index = i;
					return el;
				}
			});

			// если уменьшаем и кол-во = 1, то удаляем
			if (product.count === 1 && obj.action === 'remove') {
				state.products.splice(index, 1)
				return
			}

			switch (obj.action) {
				case 'add':
					product.count += 1
					break
				case 'remove':
					product.count -= 1
					break
				default:
					break
			}
		},
	},

	state() {
		return {
			products: [],
		}
	},

	getters: {
		getCart (state) {
			return state.products;
		},

		getCountProducts(state) {
			let count = 0;
			state.products.forEach(product => {
				count += product.count;
			});
			return count;
		},

		getPriceCart(state) {
			let price = 0;
			state.products.forEach(product => {
				price += product.count * product.price;
			});
			return price.toFixed(2);
		},

		// getFilterProducts: state => name => {
		// 	return state.products.filter(product => {
		// 		return product.name.split(" ").find(el => {
		// 			return el.substring(0, name.length).toLowerCase() === name.toLowerCase()
		// 		});
		// 		// 	return product.name.substring(0, name.length).toLowerCase() === name.toLowerCase()
		// 		// }).sort((a, b) => (a.name < b.name ? -1 : 1));
		// 	}).sort((a, b) => (a.name < b.name ? -1 : 1));
		// },

		getFilterProducts: state => searchVal => {
			return state.products.filter(product => {
				return product.title.toLowerCase().includes(searchVal.toLowerCase())
				// return product.title.split(" ").find(el => {
				// 	return el.substring(0, name.length).toLowerCase() === name.toLowerCase()
				// });
				// 	return product.name.substring(0, name.length).toLowerCase() === name.toLowerCase()
				// }).sort((a, b) => (a.name < b.name ? -1 : 1));
			}).sort((a, b) => (a.title < b.title ? -1 : 1));
		},
	},
};