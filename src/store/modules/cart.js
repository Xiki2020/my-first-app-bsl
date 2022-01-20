export default {
	actions: {},
	mutations: {},
	state() {
		return {
			cart: [],
		}
	},
	getters: {
		getCart(state) {
			return state.cart;
		},
	},
};