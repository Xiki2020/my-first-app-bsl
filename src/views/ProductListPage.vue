<template>
  <div class="products">
    <Header>
      {{
        $route.params.category.slice(0, 1).toUpperCase() +
          $route.params.category.slice(1)
      }}
    </Header>
    <div
      v-if="getCategory.length"
      class="products__list"
    >
      <CardProduct
        v-for="product in getCategory"
        :key="product.title"
        :product="product"
        class="products__item"
      />
    </div>
    <div
      v-else
      class="loader"
    >
      <Loader />
    </div>
  </div>
</template>
<script>
import CardProduct from "@/components/CardProduct/CardProduct.vue"
import Header from "@/components/Header.vue"
import Loader from "@/components/Loader.vue"

import { mapGetters, mapActions } from "vuex"

export default {
	name: "ProductListPage",

	components: {
		CardProduct,
		Header,
		Loader,
	},

	computed: {
		...mapGetters("catalog", ["getCategory"]),
	},

	created() {
		this.fetchCategory(this.$route.params.category)
	},

	beforeUnmount () {
		this.resetCategory()
	},

	methods: {
		...mapActions("catalog", ["fetchCategory", "resetCategory"]),
	},
}
</script>

<style lang="scss" scoped>
.products {
	display: flex;
	flex: 1 0 0;
	flex-direction: column;
}
.products__list {
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.products__item {
	border: 0.5px solid $secondary;
	margin-bottom: 1rem;
	transition: $transition-base;
	width: calc(50% - 0.5rem);

	&:hover {
		border-color: $gray;
	}
}

.loader {
	align-items: center;
	display: flex;
	flex: 1 0 0;
	justify-content: center;
}
</style>