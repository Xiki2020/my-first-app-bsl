<template>
  <HeaderHome class="header" />
  <PopularProductsCarousel
    class="slider-popular-product"
    :products="popularProducts"
  />
  <Categories />
  <div class="wrapper-carousel-product">
    <ProductsCarousel :products="products" />
  </div>
</template>

<script>
import Categories from "@/components/Categories.vue";
import HeaderHome from "@/components/HeaderHome.vue";
import PopularProductsCarousel from "@/components/PopularProductsCarousel/index.vue";
import ProductsCarousel from "@/components/ProductsCarousel/index.vue";

export default {
  name: "HomePage",

  components: {
    Categories,
    HeaderHome,
    PopularProductsCarousel,
    ProductsCarousel,
  },

  data() {
    return {
      products: [],
      popularProducts: [],
    };
  },

  created() {
    this.fetchProducts();
    this.fetchPopularProducts();
  },

  methods: {
    fetchProducts() {
      this.products = [
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
    fetchPopularProducts() {
      this.popularProducts = [
        {
          name: "Air Max 2090",
          img: "popular-sneaker.jpg",
          price: "$200.00",
          countColors: 6,
        },
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
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
$main-bg-color: #1152fd;

.header {
  position: absolute;
  top: 0;
}

.wrapper-carousel-product {
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