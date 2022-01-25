export default {
	namespaced: true, // ВКЛЮЧАЙ ИХ ВСЕГДА!

	actions: {
		async fetchProducts({ commit }) {
			const products = [
				{
					name: "Nike React Miler",
					img: "Nike React Miler.jpg",
					price: "170.00",
					countColors: 5,
					category: ["new"],
					id: 'baa1635d-1d49-47e9-bfc8-ac449ec93c9f',
				},
				{
					name: "Nike Air Max 270",
					img: "Nike Air Max 270.jpg",
					price: "112.00",
					countColors: 5,
					category: ["new"],
					id: '6301e2ad-12a8-4bff-980d-2aae284f2696'
				},
				{
					name: "Nike Air Force 1",
					img: "Nike Air Force 1.jpg",
					price: "200.00",
					countColors: 6,
					category: ["new", "men"],
					id: 'c933fd08-318a-411d-ae80-ca66623215f5',
				},
				{
					name: "Nike Free Metcon 3",
					img: "Nike Free Metcon 3.jpg",
					price: "190.00",
					countColors: 5,
					category: ["new", "popular"],
					id: '89709f4e-2180-441f-9225-aac1a64d73fc',
				},
				{
					name: "Nike Free Metcon 4",
					img: "Nike Free Metcon 4.jpg",
					price: "180.00",
					countColors: 4,
					category: ["new", "men"],
					id: 'c194891b-250a-436b-9f07-b1eddeefdb7a',
				},
				{
					name: "Nike Free Metcon 5",
					img: "Nike Free Metcon 5.jpg",
					price: "180.00",
					countColors: 4,
					category: ["new"],
					id: 'd270e739-7b5e-4b41-be05-225968c67453',
				},
				{
					name: "Nike 1",
					img: "sneaker1.jpg",
					price: "181.00",
					countColors: 1,
					category: ["new", "men"],
					id: 'cb91a74e-e885-49fc-b423-7bdda677a819',
				},
				{
					name: "Nike 2",
					img: "sneaker2.jpg",
					price: "182.00",
					countColors: 2,
					category: ["new"],
					id: '175a5629-716d-4910-9df7-1ab384d3e90e',
				},
				{
					name: "Nike 3",
					img: "sneaker3.jpg",
					price: "183.00",
					countColors: 3,
					category: ["new", "men", "popular"],
					id: 'd9b7aa64-9407-494a-85db-05b7485ccf89',
				},
				{
					name: "Nike 4",
					img: "sneaker4.jpg",
					price: "184.00",
					countColors: 4,
					category: ["new"],
					id: 'bf2eb41f-f792-4dc8-85f1-9ea0b9b7b436',
				},
				{
					name: "Air Max 2090",
					img: "popular-sneaker.jpg",
					price: "184.00",
					countColors: 4,
					category: ["men", "new", "popular"],
					id: 'c66fbd6f-21ca-4453-8923-808f820ab0e0',
				},
			];
			commit('setProducts', products);
		},
		async fethCategories(context) {
			const categories = [
				{
					id: '0035114a-b6ed-4dd0-b8bc-04ecbd864b3f',
					category: "Men",
					icon: "men.svg",
				},
				{
					id: '831b55a3-a2c7-49e8-805c-5ad73e2d376f',
					category: "Women",
					icon: "women.svg",
				},
				{
					id: '61bbc7e8-1f6b-46b3-a359-ea2227b6c4fc',
					category: "Kids",
					icon: "kids.svg",
				},
				{
					id: '9b268b8c-7091-4c4d-aeb0-9cf61604d925',
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
			return state.products.filter(product => {
				return product.category.find(el => el.toLowerCase() === category.toLowerCase());
			}).sort((a, b) => (a.name < b.name ? -1 : 1));
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