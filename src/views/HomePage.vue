<template>
  <div class="home-page">
    <SearchPanel class="home-page__search-panel" :products="products" />
    <div class="home-page__header">
      <div class="home-page__search search">
        <Button @click="hideSearch" class="search__btn">
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
        </Button>
        <InputSearch @handInput="showSearch" :value="searchValue" />
      </div>
    </div>
    <ProductsSlider
      class="home-page__slider"
      :products="getProductsCategory('popular')"
    />
    <Categories class="home-page__categories" />
    <div class="home-page__carousel carousel">
      <div class="carousel__header">
        <div class="carousel__title">New Products</div>
        <Button
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
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

import Button from "@/components/Button.vue";
import Categories from "@/components/Categories.vue";
import InputSearch from "@/components/FormComponents/InputSearch.vue";
import ProductsSlider from "@/components/ProductsSlider/index.vue";
import ProductsCarousel from "@/components/ProductsCarousel/index.vue";
import SearchPanel from "@/components/SearchPanel.vue";

export default {
  name: "HomePage",

  components: {
    Button,
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

  watch: {
    searchValue(value) {
      this.products = this.getFilterProducts(value);
    },
  },

  computed: {
    ...mapGetters("catalog", ["getProductsCategory", "getFilterProducts"]),
  },

  methods: {
    ...mapActions("catalog", ["fetchProducts"]),
    ...mapMutations("common", ["setSearchVisible"]),

    showSearch(value) {
      this.searchValue = value;

      if (value.length < 3) return;

      this.setSearchVisible(true);
    },

    hideSearch() {
      this.setSearchVisible(false);
      this.searchValue = "";
    },
  },

  created() {
    this.fetchProducts();
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  justify-content: space-between;
  .app--search-opened & {
    max-height: 100vh;
    overflow: hidden;
  }
}
.home-page__header {
  background-color: $primary;
  border-radius: 0 0 38px 38px;
  margin-left: -$padding-side;
  padding: 3.3rem $padding-side 7.4rem;
  width: calc(100% + $padding-side * 2);
}

//Search Panel
.home-page__search-panel {
  margin-left: -$padding-side;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: -10vh;
  z-index: 20;

  .app--search-opened & {
    opacity: 1;
    visibility: visible;
    top: 0;
  }
}
.search {
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
  transition: $transition-base;

  .app--search-opened & {
    background-color: $secondary;
    padding: 1rem 0.5rem;
    z-index: 30;
  }
}
.search__btn {
  background-color: transparent;
  padding: 0;
  transition: $transition-base;
  user-select: none;
  width: 0;

  &:hover {
    opacity: 0.8;
    transform: none;
  }

  .app--search-opened & {
    padding: 0 0.5rem;
    width: auto;
  }
}
//
.home-page__slider {
  margin-top: -4.5rem;
  width: 100%;
}
.home-page__categories {
  margin-top: 1.2rem;
}
.home-page__carousel {
  background-color: #e0e4e7;
  border-radius: 25px 25px 0 0;
  margin-left: -$padding-side;
  margin-top: 1.2rem;
  overflow: hidden;
  padding-bottom: 1.5rem;
  width: calc(100% + $padding-side * 2);
}
.carousel__header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem $padding-side 1.25rem;
}
.carousel__title {
  color: $fc-gray;
  font-size: 1.125rem;
  font-weight: 700;
  margin-right: 1rem;
  white-space: nowrap;
}
</style>