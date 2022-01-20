<template>
  <AppWrapper class="home-page">
    <div class="home-page__header">
      <AppButton
        class="home-page__search"
        text="Search"
        @click="$router.push({ name: 'SearchPage' })"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 9.84871 15.3729 11.551 14.3199 12.9056L19.7071 18.2929L18.2929 19.7071L12.9056 14.3199C11.551 15.3729 9.84871 16 8 16ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z"
            fill="#D5DDE0"
          />
        </svg>
      </AppButton>
    </div>
    <PopularProductsCarousel
      class="swiper-popular-product"
      :products="getPopularProducts"
    />
    <div class="home-page__body">
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
    </div>
  </AppWrapper>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import AppWrapper from "@/components/AppWrapper.vue";
import Categories from "@/components/Categories.vue";
import PopularProductsCarousel from "@/components/PopularProductsCarousel/index.vue";
import ProductsCarousel from "@/components/ProductsCarousel/index.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomePage",

  components: {
    AppButton,
    AppWrapper,
    Categories,
    PopularProductsCarousel,
    ProductsCarousel,
  },
  methods: mapActions(["fethProducts"]),
  computed: mapGetters(["getNewProducts", "getPopularProducts"]),
  created() {
    this.fethProducts();
  },
};
</script>

<style lang="scss" scoped>
.swiper-popular-product {
  left: 50%;
  top: 146px;
  position: absolute;
  transform: translateX(-50%);
  width: calc(100% - 4.5rem);
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
  background-color: #f7f8f9;
  color: $secondary;
  font-weight: 500;
  font-size: 14px;
  justify-content: left;
  padding-left: 1.25rem;

  &:hover {
    border: 1px solid $fc-gray;
    transform: none;
  }
}
.home-page__body {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
}
.home-page__categories {
  height: 70px;
}

.home-page__wrapper-swiper {
  background-color: #e0e4e7;
  border-radius: 25px 25px 0 0;
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