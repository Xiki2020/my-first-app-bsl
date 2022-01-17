<template>
  <AppWrapper style="height: calc(100vh - 235px)">
    <PopularProductsCarousel
      class="slider-popular-product"
      :products="popularProducts"
    />
    <div class="wrapper-content">
      <Categories class="wrapper-content__categories" />
      <div class="wrapper-carousel-product">
        <div class="wrapper-carousel__header">
          <div class="wrapper-carousel__title">New Products</div>
          <AppButton
            text="View All"
            size="small"
            class="wrapper-carousel__btn-view"
            @click="$router.push({ name: 'TempPage' })"
          />
        </div>
        <ProductsCarousel :products="products" class="products-carousel" />
      </div>
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
.wrapper-content {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
.wrapper-content__categories {
  align-items: center;
  display: flex;
  height: 100%;
  min-height: 190px;
  padding: 5rem 0 1rem;
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
  min-height: 390px;
  left: 0;
  overflow: hidden;
  padding-bottom: 4.25rem;
  width: calc(100% + 4.5rem);
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
.products-carousel {
}
</style>