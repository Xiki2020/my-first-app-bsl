<template>
  <SliderPopularProduct class="slider-popular-product" />
  <header class="header">
    <Search />
  </header>

  <NavFilter />
  <main class="main">
    <ProductsCarousel />
  </main>
  <tab-bar></tab-bar>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
import SliderPopularProduct from "@/components/SliderPopularProduct.vue";
import NavFilter from "@/components/NavFilter.vue";

import Search from "@/components/Search/index.vue";

import ProductsCarousel from "@/components/ProductsCarousel/index.vue";

export default {
  components: {
    TabBar,
    Search,
    SliderPopularProduct,
    NavFilter,
    ProductsCarousel,
  },
  name: "HomePage",
  props: {
    cards: {
      type: Array,
      reqired: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$main-bg-color: #1152fd;
.header {
  background-color: $main-bg-color;
  border-radius: 0 0 38px 38px;
  height: 231px;
  padding: 53px 9.6% 0;
  width: 100%;
}

.search {
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.main {
  height: 354px;
  overflow: hidden;
  padding-top: 24px;
  width: 100%;
}

.tab-bar {
  bottom: 0px;
  left: 0px;
  position: sticky;
  path {
    fill: red;
  }
}

.tab-bar__home {
  fill: red;
}

.search-bar {
  width: 75%;
}

.slider-popular-product {
  left: 50%;
  top: 146px;
  transform: translateX(-50%);
  position: absolute;
}
</style>