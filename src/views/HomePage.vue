<template>
  <PopularProductsCarousel
    class="slider-popular-product"
    :products="popularProducts"
  />
  <Categories style="margin-bottom: 40vh" />
  <div class="wrapper-carousel-product">
    <ProductsCarousel :products="products" />
  </div>
</template>

<script>
import Categories from "@/components/Categories.vue";
import PopularProductsCarousel from "@/components/PopularProductsCarousel/index.vue";
import ProductsCarousel from "@/components/ProductsCarousel/index.vue";

export default {
  name: "HomePage",

  components: {
    Categories,
    PopularProductsCarousel,
    ProductsCarousel,
  },

  data() {
    return {
      products: [],
      popularProducts: [
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
      ],
    };
  },

  created() {
    this.fetchProducts();
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
  },
};
</script>

<style lang="scss" scoped>
.wrapper-carousel-product {
  bottom: 68px;
  height: 40vh;
  left: 0;
  overflow: hidden;
  position: absolute;
  width: 100%;
}

.slider-popular-product {
  left: 50%;
  top: 146px;
  transform: translateX(-50%);
  position: absolute;
}
</style>