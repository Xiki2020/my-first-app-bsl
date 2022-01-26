export default {
	namespaced: true,

	actions: {
	},

	mutations: {
		setSearchVisible(state, payload) {
			state.searchVisible = payload;
		}
	},

	state() {
		return {
			searchVisible: false
		};
	}
};