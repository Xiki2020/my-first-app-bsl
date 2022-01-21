export default {
	namespaced: true,
	actions: {
		changeValueSearch(ctx, value) {
			const value_search = value;
			ctx.commit('updateValueSearch', value_search)
		}
	},
	mutations: {
		updateValueSearch(state, value_search) {
			state.value_search = value_search;
		}
	},
	state() {
		return {
			value_search: "",
		}
	},
	getters: {
		getValueSearch(state) {
			return state.value_search;
		},
	},
};