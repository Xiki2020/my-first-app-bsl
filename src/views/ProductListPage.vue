<template>
  <div class="products-list">
    <Header>{{
      $route.params.category.slice(0, 1).toUpperCase() +
      $route.params.category.slice(1)
    }}</Header>
    <CardProductVertical
      v-for="product in getProductsCategory($route.params.category)"
      :product="product"
      :key="product.name"
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