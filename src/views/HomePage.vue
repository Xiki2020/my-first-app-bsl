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
        <AppButton
          text="View All"
          size="small"
          class="wrapper-carousel__btn-view"
        />
      </div>
      <ProductsCarousel :products="products" />
    </div>
  </AppWrapper>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import AppWrapper from "@/components/AppWrapper.vue";
import Categories from "@/components/Categories.vue";
import PopularProductsCarousel from "@/components/PopularProductsCarousel/index.vue";
import ProductsCarousel from "@/components/ProductsCarousel/index.vue";

export default {
  name: "HomePage",

  components: {
    AppButton,
    AppWrapper,
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
  padding-bottom: 1.5625rem;
  position: absolute;
  width: 100%;
}

.wrapper-carousel__header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2.25rem 1.25rem;

  .wrapper-carousel__title {
    color: $fc-gray;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.25;
  }

  .wrapper-carousel__btn-view:hover {
    transform: translateY(-3px);
  }
}
</style>