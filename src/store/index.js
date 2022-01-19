import { createStore } from 'vuex'
import catalog from './modules/catalog'

const store = createStore({
	modules: {
		catalog,
	}
})

export default store