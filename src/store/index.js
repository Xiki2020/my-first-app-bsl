import { createStore } from 'vuex'
import catalog from './modules/catalog'
import user from './modules/user'
import cart from './modules/cart'

const store = createStore({
	modules: {
		catalog,
		cart,
		user,
	}
})

export default store