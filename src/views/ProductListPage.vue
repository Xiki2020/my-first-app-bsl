<template>
  <AppWrapper class="products-list">
    <CardProductVertical
      v-for="product in getProductsCategory($route.params.category)"
      :product="product"
      :key="product.name"
      class="products-list__item"
    />
  </AppWrapper>
</template>
<script>
import AppWrapper from "@/components/AppWrapper.vue";
import CardProductVertical from "@/components/CardProduct/CardProductVertical.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductListPage",

  components: {
    AppWrapper,
    CardProductVertical,
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
  margin-top: 2rem;
  padding-bottom: 3.6rem;
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