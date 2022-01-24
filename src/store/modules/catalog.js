import { getUniqId } from "@/utils/common";

export default {
	namespaced: true, // ВКЛЮЧАЙ ИХ ВСЕГДА!

	actions: {
		async fetchProducts({ commit }) {
			const products = [
				{
					name: "Nike React Miler",
					img: "Nike React Miler.jpg",
					price: "$170.00",
					countColors: 5,
					category: "new",
					id: getUniqId(),
				},
				{
					name: "Nike Air Max 270",
					img: "Nike Air Max 270.jpg",
					price: "$112.00",
					countColors: 5,
					category: "new",
					id: getUniqId(),
				},
				{
					name: "Nike Air Force 1",
					img: "Nike Air Force 1.jpg",
					price: "$200.00",
					countColors: 6,
					category: "men",
					id: getUniqId(),
				},
				{
					name: "Nike Free Metcon 3",
					img: "Nike Free Metcon 3.jpg",
					price: "$190.00",
					countColors: 5,
					category: "new",
					id: getUniqId(),
				},
				{
					name: "Nike Free Metcon 4",
					img: "Nike Free Metcon 4.jpg",
					price: "$180.00",
					countColors: 4,
					category: "men",
					id: getUniqId(),
				},
				{
					name: "Nike Free Metcon 5",
					img: "Nike Free Metcon 5.jpg",
					price: "$180.00",
					countColors: 4,
					category: "new",
					id: getUniqId(),
				},
				{
					name: "Nike 1",
					img: "sneaker1.jpg",
					price: "$181.00",
					countColors: 1,
					category: "men",
					id: getUniqId(),
				},
				{
					name: "Nike 2",
					img: "sneaker2.jpg",
					price: "$182.00",
					countColors: 2,
					category: "new",
					id: getUniqId(),
				},
				{
					name: "Nike 3",
					img: "sneaker3.jpg",
					price: "$183.00",
					countColors: 3,
					category: "men",
					id: getUniqId(),
				},
				{
					name: "Nike 4",
					img: "sneaker4.jpg",
					price: "$184.00",
					countColors: 4,
					category: "new",
					id: getUniqId(),
				},
				{
					name: "Air Max 2090",
					img: "popular-sneaker.jpg",
					price: "$184.00",
					countColors: 4,
					category: "popular",
					id: getUniqId(),
				},
				{
					name: "Air Max 2090",
					img: "popular-sneaker.jpg",
					price: "$184.00",
					countColors: 4,
					category: "popular",
					id: getUniqId(),
				},
				{
					name: "Air Max 2090",
					img: "popular-sneaker.jpg",
					price: "$184.00",
					countColors: 4,
					category: "popular",
					id: getUniqId(),
				},
			];
			commit('setProducts', products)
		},
		async fethCategories(context) {
			const categories = [
				{
					id: getUniqId(),
					category: "Men",
					icon: "men.svg",
				},
				{
					id: getUniqId(),
					category: "Women",
					icon: "women.svg",
				},
				{
					id: getUniqId(),
					category: "Kids",
					icon: "kids.svg",
				},
				{
					id: getUniqId(),
					category: "New",
					icon: "sale.svg",
				},
			];
			context.commit('setCategories', categories);
		}
	},

	mutations: {
		setProducts(state, products) {
			state.products = products;
		},
		setCategories(state, categories) {
			state.categories = categories;
		},
	},

	state() {
		return {
			products: [],
			categories: [],
		};
	},

	getters: {
		getProductsCategory: state => category => {
			return state.products.filter(product => product.category.toLowerCase() === category.toLowerCase());
		},

		getProductId: state => id => {
			return state.products.find(product => product.id === id)
		},

		getFilterProducts: state => name => {
			if (name.length < 1) return [];

			return state.products.filter(product => {
				return product.name.substring(0, name.length).toLowerCase() === name.toLowerCase()
			}).sort((a, b) => (a.name < b.name ? -1 : 1));
		},

		getCategories(state) {
			return state.categories;
		},


	},
};