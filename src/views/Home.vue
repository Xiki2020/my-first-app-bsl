<template>
  <PopularProductsCarousel class="slider-popular-product" />

  <Categories />

  <main class="main">
    <ProductsCarousel :products="cards" />
  </main>
</template>

<script>
import Categories from "@/components/Categories.vue";
import ProductsCarousel from "@/components/ProductsCarousel/index.vue";
import PopularProductsCarousel from "@/components/PopularProductsCarousel/index.vue";

export default {
  name: "HomePage",

  components: {
    Categories,
    ProductsCarousel,
    PopularProductsCarousel,
  },

  data() {
    return {
      cards: [],
    };
  },

  created() {
    this.fetchProducts();
  },

  methods: {
    fetchProducts() {
      this.cards = [
        {
          name: "Nike React Miler",
          img: "product-temp.jpg",
          price: "$170.00",
          countColors: 5,
        },
        {
          name: "Nike Air Max 270",
          img: "sneaker2.jpg",
          price: "$112.00",
          countColors: 5,
        },
        {
          name: "Air Max 2090",
          img: "popular-sneaker.jpg",
          price: "$200.00",
          countColors: 6,
        },
        {
          name: "Air Max 2090",
          img: "popular-sneaker.jpg",
          price: "$200.00",
          countColors: 6,
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
$main-bg-color: #1152fd;

.main {
  height: 100%;
  overflow: hidden;
  padding-top: 24px;
  width: 100%;
}

.slider-popular-product {
  left: 50%;
  top: 146px;
  transform: translateX(-50%);
  position: absolute;
}
</style>