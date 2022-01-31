<template>
  <div class="products">
    <Header>{{
      $route.params.category.slice(0, 1).toUpperCase() +
      $route.params.category.slice(1)
    }}</Header>
    <div class="products__list" v-if="getCategory">
      <CardProductVertical
        v-for="product in getCategory"
        :product="product"
        :key="product.title"
        class="products__item"
      />
    </div>
    <div class="loader" v-else>
      <Loader />
    </div>
  </div>
</template>
<script>
import CardProductVertical from "@/components/CardProduct/CardProductVertical.vue";
import Header from "@/components/Header.vue";
import Loader from "@/components/Loader.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductListPage",

  components: {
    CardProductVertical,
    Header,
    Loader,
  },

  computed: {
    ...mapGetters("catalog", ["getCategory"]),
  },

  methods: {
    ...mapActions("catalog", ["fetchCategory"]),
  },

  created() {
    this.fetchCategory(this.$route.params.category);
  },
};
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