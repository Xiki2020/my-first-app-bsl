<template>
  <div class="products-list">
    <Header>{{
      $route.params.category.slice(0, 1).toUpperCase() +
      $route.params.category.slice(1)
    }}</Header>
    <CardProductVertical
      v-for="product in getCatalogCategory"
      :product="product"
      :key="product.title"
      class="products-list__item"
    />
  </div>
</template>
<script>
import CardProductVertical from "@/components/CardProduct/CardProductVertical.vue";
import Header from "@/components/Header.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductListPage",

  components: {
    CardProductVertical,
    Header,
  },

  computed: {
    ...mapGetters("catalog", ["getProductsCategory", "getCatalogCategory"]),
  },

  methods: {
    ...mapActions("catalog", ["fetchProducts", "fetchCatalogCategory"]),
  },

  created() {
    this.fetchProducts();
    this.fetchCatalogCategory(this.$route.params.category);
  },
};
</script>

<style lang="scss" scoped>
.products-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.products-list__item {
  border: 0.5px solid $secondary;
  margin-bottom: 1rem;
  transition: $transition-base;
  width: calc(50% - 0.5rem);

  &:hover {
    border-color: $gray;
  }
}
</style>