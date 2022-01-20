import { createStore } from 'vuex'
import catalog from './modules/catalog'
import user from './modules/user'
import cart from './modules/cart'
import search from './modules/search'

const store = createStore({
	modules: {
		catalog,
		cart,
		user,
		search,
	}
})

export default store