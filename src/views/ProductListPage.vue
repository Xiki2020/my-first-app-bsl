<template>
  <AppWrapper class="product-list">
    <CardProduct
      v-for="product in getProductsCategory($route.params.category)"
      :product="product"
      :key="product.name"
      class="product-list__product"
    />
  </AppWrapper>
</template>
<script>
import AppWrapper from "@/components/AppWrapper.vue";
import CardProduct from "@/components/CardProduct.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductListPage",

  components: {
    AppWrapper,
    CardProduct,
  },

  computed: {
    ...mapGetters("catalog", ["getProductsCategory"]),
  },

  methods: {
    ...mapActions("catalog", ["fetchProducts"]),
  },

  created() {
    this.fetchProducts();
  },
};
</script>

<style lang="scss" scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
}
.product-list__product {
  border: 0.5px solid $secondary;
  margin-bottom: 1rem;
  width: calc(50% - 0.5rem);
}
</style>