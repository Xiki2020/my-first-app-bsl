export default {
	actions: {
		changeRole(ctx, newRole) {
			const role = newRole;
			ctx.commit('updateRole', role)
		}
	},
	mutations: {
		updateRole(state, role) {
			state.role = role;
		}
	},
	state() {
		return {
			role: "guest",
		}
	},
	getters: {
		getRole(state) {
			return state.role;
		},
	},
};