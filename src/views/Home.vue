<template>
  <slider-popular-product
    class="slider-popular-product"
  ></slider-popular-product>
  <header class="header">
    <div class="search">
      <search-bar></search-bar>
      <btn-search-photo></btn-search-photo>
    </div>
  </header>
  <nav-filtr></nav-filtr>
  <main class="main">
    <div class="main__content">
      <div class="main__header">
        <h3 class="main__block-name">New Products</h3>
        <button class="main__btn-view">View all</button>
      </div>
      <div class="main__slider-container">
        <card-product></card-product>
        <card-product></card-product>
        <card-product></card-product>
      </div>
    </div>
  </main>
  <tab-bar></tab-bar>
</template>

<script>
import TabBar from "../components/TabBar.vue";
import SearchBar from "../components/SearchBar.vue";
import BtnSearchPhoto from "../components/ButtonSearchPhoto.vue";
import SliderPopularProduct from "../components/SliderPopularProduct.vue";
import NavFiltr from "../components/NavFiltr.vue";
import CardProduct from "../components/CardProduct.vue";
export default {
  components: {
    TabBar,
    SearchBar,
    BtnSearchPhoto,
    SliderPopularProduct,
    NavFiltr,
    CardProduct,
  },
  name: "HomePage",
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 231px;

  padding: 53px 9.6% 0;

  border-radius: 0 0 38px 38px;
  background-color: var(--main-bg-color);
}

.search {
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
}

.main {
  width: 100%;
  height: 354px;

  padding-top: 24px;
  overflow: hidden;
}

.main__content {
  width: 100%;
  height: 100%;

  background-color: #f7f8f9;

  border-radius: 25px 25px 0 0;
  padding: 0 9.6%;
}

.main__header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 24px;
}

.main__block-name {
  margin: 0;

  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #3e4958;
}

.main__btn-view {
  width: 73px;
  height: 36px;

  border-radius: 7px;
  border: none;
  outline: none;

  background-color: var(--main-bg-color);

  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  color: #ffffff;
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