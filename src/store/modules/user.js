export default {
	actions: {
		changeRole(ctx, newRole) {
			const role = newRole
			ctx.commit('setRole', role)
		},

	},
	mutations: {
		setRole(state, role) {
			state.role = role
		}
	},
	state() {
		return {
			role: "guest",
		}
	},
	getters: {
		getRole(state) {
			return state.role
		},
	},
}