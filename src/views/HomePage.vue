<template>
  <AppWrapper>
    <PopularProductsCarousel
      class="slider-popular-product"
      :products="popularProducts"
    />
    <div class="container">
      <Categories />
    </div>
    <div class="wrapper-carousel-product">
      <div class="wrapper-carousel__header">
        <div class="wrapper-carousel__title">New Products</div>
        <SmallBtn text="View All" />
      </div>
      <ProductsCarousel :products="products" />
    </div>
  </AppWrapper>
</template>

<script>
import AppWrapper from "@/components/AppWrapper.vue";
import Categories from "@/components/Categories.vue";
import PopularProductsCarousel from "@/components/PopularProductsCarousel/index.vue";
import ProductsCarousel from "@/components/ProductsCarousel/index.vue";
import SmallBtn from "@/components/AppButton/SmallBtn.vue";

export default {
  name: "HomePage",

  components: {
    AppWrapper,
    Categories,
    PopularProductsCarousel,
    ProductsCarousel,
    SmallBtn,
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
.container {
  min-height: 510px;
  padding-top: 28%;
}

.slider-popular-product {
  left: 50%;
  top: 146px;
  position: absolute;
  transform: translateX(-50%);
}

.wrapper-carousel-product {
  background-color: #e0e4e7;
  border-radius: 25px 25px 0 0;
  bottom: 68px;
  min-height: 330px;
  left: 0;
  overflow-x: hidden;
  padding-bottom: 25px;
  position: absolute;
  width: 100%;
}

.wrapper-carousel__header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 16px 36px 19px;

  .wrapper-carousel__title {
    color: #3e4958;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.25;
  }
}
</style>