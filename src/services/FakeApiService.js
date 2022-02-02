import axios from 'axios'
import router from '@/router'

const apiClient = axios.create({
	baseURL: 'https://fakestoreapi.com',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-type': 'application/json',
		token: localStorage.getItem('token-bsl'),
	}
})

export default {
	getProducts() {
		return apiClient.get('/products')
	},
	getСategories() {
		return apiClient.get('/products/categories')
	},
	getProductsCategory(category) {
		return apiClient.get(`/products/category/${category}`)
	},
	getProduct(id) {
		return apiClient.get(`/products/${id}`)
	},

	authLogin(valueAuth) {
		return apiClient.post('/auth/login', valueAuth)
		.then(response => {
			localStorage.setItem("token-bsl", response.data.token)
			router.push({ name: "HomePage" })
		})
	}
}