import { createStore } from 'vuex'
import catalog from './modules/catalog'
import user from './modules/user'
import cart from './modules/cart'
import common from './modules/common'
import search from './modules/search'

const store = createStore({
	modules: {
		catalog,
		common,
		cart,
		user,
		search,
	}
})

export default store