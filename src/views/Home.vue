<template>
  <SliderPopularProduct
    class="slider-popular-product"
  />
  <header class="header">
    <Search />
  </header>

  <NavFilter />
  <main class="main">
    <div class="main__content">
      <div class="main__header">
        <h3 class="main__block-name">New Products</h3>
        <Btn
          class="main__btn"
          text="View All"
          style="padding"
        />
      </div>
      <div class="main__slider-container">
        <CardProduct
          v-for="card in cards"
          :key="card.name"
          :card="card"
        />
      </div>
    </div>

    <ProductsCarousel />
  </main>
  <tab-bar></tab-bar>
</template>

<script>
import TabBar from "@/components/TabBar.vue";
import SliderPopularProduct from "@/components/SliderPopularProduct.vue";
import NavFilter from "@/components/NavFilter.vue";
import CardProduct from "@/components/CardProduct.vue";
import Search from "@/components/Search/index.vue";
import Btn from "@/components/Btn.vue";
import ProductsCarousel from "@/components/ProductsCarousel/index.vue";

export default {
  components: {
    TabBar,
    Search,
    SliderPopularProduct,
    NavFilter,
    CardProduct,
    Btn,
    ProductsCarousel
  },
  name: "HomePage",
  props: {
    cards: {
      type: Array,
      reqired: true,
    },
  }
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

.main__content {
  background-color: #f7f8f9;
  border-radius: 25px 25px 0 0;
  height: 100%;
  padding: 0 9.6%;
  width: 100%;
}

.main__header {
  align-items: center;
  display: flex;
  padding-top: 24px;
}

.main__block-name {
  color: #3e4958;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0em;
  line-height: 22px;
  margin: 0;
  text-align: left;
}

.main__btn {
  margin-left: auto;
}

.main__slider-container {
  display: flex;
  margin: 0 -4.5px;
  padding-top: 19px;
  text-align: center;
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