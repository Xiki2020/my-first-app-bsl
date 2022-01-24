<template>
  <AppWrapper class="home-page">
    <PageSearch class="home-page__page-search" />
    <div class="home-page__header">
      <InputSearch class="home-page__search" />
    </div>
    <PopularProductsCarousel
      class="home-page__swiper-popular-product"
      :products="getPopularProducts"
    />
    <Categories class="home-page__categories" />
    <div class="home-page__wrapper-swiper">
      <div class="home-page__header-swiper">
        <div class="home-page__title-swiper">New Products</div>
        <AppButton
          text="View All"
          size="small"
          @click="$router.push({ name: 'TempPage' })"
        />
      </div>
      <ProductsCarousel :products="getNewProducts" />
    </div>
  </AppWrapper>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import AppButton from "@/components/AppButton.vue";
import AppWrapper from "@/components/AppWrapper.vue";
import Categories from "@/components/Categories.vue";
import InputSearch from "@/components/FormComponents/InputSearch.vue";
import PageSearch from "@/components/PageSearch.vue";
import PopularProductsCarousel from "@/components/PopularProductsCarousel/index.vue";
import ProductsCarousel from "@/components/ProductsCarousel/index.vue";

export default {
  name: "HomePage",

  components: {
    AppButton,
    AppWrapper,
    Categories,
    InputSearch,
    PageSearch,
    PopularProductsCarousel,
    ProductsCarousel,
  },

  computed: {
    ...mapGetters("catalog", ["getNewProducts", "getPopularProducts"]),
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
.home-page__page-search {
  background-color: $white;
  left: 0;
  position: fixed;
  top: -100vh;
  transition: $transition-base;
  z-index: 20;
}
.home-page__page-search--active {
  top: 0;
}
.home-page__header {
  background-color: $primary;
  border-radius: 0 0 38px 38px;
  height: 231px;
  margin-left: -2.25rem;
  padding: 3.3rem 2.25rem 0;
  width: calc(100% + 4.5rem);
}
.home-page__search {
  position: relative;
  z-index: 30;
}
.home-page__swiper-popular-product {
  margin-top: -70px;
}
.home-page__categories {
  height: 70px;
  margin-top: 1.2rem;
}
.home-page__wrapper-swiper {
  background-color: #e0e4e7;
  border-radius: 25px 25px 0 0;
  margin-left: -2.25rem;
  margin-top: 1.375rem;
  min-height: 340px;
  overflow: hidden;
  padding-bottom: 1.5rem;
  width: calc(100% + 4.5rem);
}
.home-page__header-swiper {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2.25rem 1.25rem;
}
.home-page__title-swiper {
  color: $fc-gray;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.25;
  margin-right: 1rem;
  white-space: nowrap;
}
</style>