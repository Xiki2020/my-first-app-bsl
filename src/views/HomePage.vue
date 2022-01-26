<template>
  <AppWrapper class="home-page">
    <SearchPanel class="home-page__page-search" :products="products" />
    <div class="home-page__header">
      <AppButton @click="hideSearch" class="home-page__btn">
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.82828 8.29289L18.4141 8.29289L18.4141 10.2929L3.82828 10.2929L10.1212 16.5858L8.70696 18L-0.000149919 9.29289L8.70696 0.585786L10.1212 2L3.82828 8.29289Z"
            fill="#3E4958"
          />
        </svg>
      </AppButton>
      <InputSearch
        class="home-page__search"
        @handInput="showSearch"
        :value="searchValue"
      />
    </div>
    <ProductsSlider
      class="home-page__swiper-popular-product"
      :products="getProductsCategory('popular')"
    />
    <Categories class="home-page__categories" />
    <div class="home-page__wrapper-swiper">
      <div class="home-page__header-swiper">
        <div class="home-page__title-swiper">New Products</div>
        <AppButton
          text="View All"
          size="small"
          @click="
            $router.push({
              name: 'ProductListPage',
              params: { category: 'new' },
            })
          "
        />
      </div>
      <ProductsCarousel :products="getProductsCategory('new')" />
    </div>
  </AppWrapper>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

import AppButton from "@/components/AppButton.vue";
import AppWrapper from "@/components/AppWrapper.vue";
import Categories from "@/components/Categories.vue";
import InputSearch from "@/components/FormComponents/InputSearch.vue";
import ProductsSlider from "@/components/ProductsSlider/index.vue";
import ProductsCarousel from "@/components/ProductsCarousel/index.vue";
import SearchPanel from "@/components/SearchPanel.vue";

export default {
  name: "HomePage",

  components: {
    AppButton,
    AppWrapper,
    Categories,
    InputSearch,
    ProductsSlider,
    ProductsCarousel,
    SearchPanel,
  },

  data() {
    return {
      products: [],
      searchValue: "",
    };
  },

  computed: {
    ...mapGetters("catalog", ["getProductsCategory", "getFilterProducts"]),
  },

  methods: {
    ...mapActions("catalog", ["fetchProducts"]),
    ...mapMutations("common", ["setSearchVisible"]),

    showSearch(value) {
      this.searchValue = value;
      this.findProducts();

      if (value.length < 3) return;

      this.setSearchVisible(true);
    },

    hideSearch() {
      this.setSearchVisible(false);
      this.searchValue = "";
    },

    findProducts() {
      this.products = this.getFilterProducts(this.searchValue);
    },
  },

  created() {
    this.fetchProducts();
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  .app--search-opened & {
    max-height: 100vh;
    overflow: hidden;
  }
}

.home-page__page-search {
  background-color: $white;
  margin-left: -$padding-side;
  max-width: $body-max-width;
  min-width: $body-min-width;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: -10vh;
  transition: $transition-base;
  z-index: 20;

  .app--search-opened & {
    opacity: 1;
    visibility: visible;
    top: 0;
  }
}

.home-page__header {
  background-color: $primary;
  border-radius: 0 0 38px 38px;
  display: flex;
  height: 231px;
  justify-content: space-between;
  margin-left: -$padding-side;
  padding: 3.3rem $padding-side 0;
  width: calc(100% + $padding-side * 2);
}

.home-page__btn {
  background-color: transparent;
  padding: 0;
  position: relative;
  transition: all 0.3s linear;
  width: 0;
  z-index: 30;

  &:hover {
    opacity: 0.8;
    transform: none;
  }

  .app--search-opened & {
    padding: 0 0.5rem;
    width: auto;
  }
}

.home-page__search {
  position: relative;
  width: 100%;
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
  margin-left: -$padding-side;
  margin-top: 1.375rem;
  min-height: 340px;
  overflow: hidden;
  padding-bottom: 1.5rem;
  width: calc(100% + $padding-side * 2);
}
.home-page__header-swiper {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem $padding-side 1.25rem;
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