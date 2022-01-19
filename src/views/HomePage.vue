<template>
  <AppWrapper class="home-page">
    <PopularProductsCarousel
      class="swiper-popular-product"
      :products="popularProducts"
    />
    <div class="home-page__body">
      <Categories class="home-page__categories" />
      <div class="home-page__wrapper-swiper">
        <div class="home-page__header-swiper">
          <div class="home-page__title-swiper">New Products</div>
          <AppButton
            text="View All"
            size="small"
            @click="$router.push({ name: 'TempPage' })"
          />
        </div>
        <ProductsCarousel :products="products" />
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
.swiper-popular-product {
  left: 50%;
  top: 146px;
  position: absolute;
  transform: translateX(-50%);
  width: calc(100% - 4.5rem);
}
.home-page {
  padding-top: 5rem;
}
.home-page__body {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.home-page__categories {
  height: 70px;
}

.home-page__wrapper-swiper {
  background-color: #e0e4e7;
  border-radius: 25px 25px 0 0;
  margin-top: 1.375rem;
  min-height: 340px;
  overflow: hidden;
  padding-bottom: 1.5rem;
  width: calc(100% + 4.5rem);
}

.home-page__header-swiper {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2.25rem 1.25rem;
}

.home-page__title-swiper {
  color: $fc-gray;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.25;
  margin-right: 1rem;
  white-space: nowrap;
}
</style>