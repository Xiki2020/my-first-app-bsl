export default {
	actions: {
		async fethProducts(ctx) {
			const products = [
				{
					name: "Nike React Miler",
					img: "Nike React Miler.jpg",
					price: "$170.00",
					countColors: 5,
					category: "new",
				},
				{
					name: "Nike Air Max 270",
					img: "Nike Air Max 270.jpg",
					price: "$112.00",
					countColors: 5,
					category: "new",
				},
				{
					name: "Nike Air Force 1",
					img: "Nike Air Force 1.jpg",
					price: "$200.00",
					countColors: 6,
				},
				{
					name: "Nike Free Metcon 3",
					img: "Nike Free Metcon 3.jpg",
					price: "$190.00",
					countColors: 5,
					category: "new",
				},
				{
					name: "Nike Free Metcon 4",
					img: "Nike Free Metcon 4.jpg",
					price: "$180.00",
					countColors: 4,
				},
				{
					name: "Nike Free Metcon 5",
					img: "Nike Free Metcon 5.jpg",
					price: "$180.00",
					countColors: 4,
					category: "new",
				},
				{
					name: "Nike 1",
					img: "sneaker1.jpg",
					price: "$181.00",
					countColors: 1,
				},
				{
					name: "Nike 2",
					img: "sneaker2.jpg",
					price: "$182.00",
					countColors: 2,
					category: "new",
				},
				{
					name: "Nike 3",
					img: "sneaker3.jpg",
					price: "$183.00",
					countColors: 3,
				},
				{
					name: "Nike 4",
					img: "sneaker4.jpg",
					price: "$184.00",
					countColors: 4,
					category: "new",
				},
				{
					name: "Air Max 2090",
					img: "popular-sneaker.jpg",
					price: "$184.00",
					countColors: 4,
					category: "popular",
				},
				{
					name: "Air Max 2090",
					img: "popular-sneaker.jpg",
					price: "$184.00",
					countColors: 4,
					category: "popular",
				},
				{
					name: "Air Max 2090",
					img: "popular-sneaker.jpg",
					price: "$184.00",
					countColors: 4,
					category: "popular",
				},
			];
			ctx.commit('updateProducts', products)
		},
		async fethCategories(ctx) {
			const categories = [
				{
					category: "Men",
					icon: "men.svg",
				},
				{
					category: "Women",
					icon: "women.svg",
				},
				{
					category: "Kids",
					icon: "kids.svg",
				},
				{
					category: "Sale",
					icon: "sale.svg",
				},
			];
			ctx.commit('updateCategories', categories);
		}
	},
	mutations: {
		updateProducts(state, products) {
			state.products = products;
		},
		updateCategories(state, categories) {
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
		getNewProducts(state) {
			return state.products.filter(product => product.category === "new");
		},
		getPopularProducts(state) {
			return state.products.filter(product => product.category === "popular");
		},
		getFiltrProducts: state => name => {
			return state.products.filter(product => {
				return product.name.substring(0, name.length).toLowerCase() === name.toLowerCase()
			}).sort((a, b) => (a.name < b.name ? -1 : 1));
		},
		getCategories(state) {
			return state.categories;
		}
	},
};