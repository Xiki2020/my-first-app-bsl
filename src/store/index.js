import { createStore } from 'vuex'
import catalog from './modules/catalog'
import user from './modules/user'

const store = createStore({
	modules: {
		catalog,
		user,
	}
})

export default store