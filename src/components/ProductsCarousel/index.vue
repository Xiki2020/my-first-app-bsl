<template>
  <div class="products-carousel" ref="container">
    <div class="products-carousel__header">
      <div class="products-carousel__title">New Products</div>
      <Btn class="products-carousel__btn" text="View All" />
    </div>
    <div class="products-carousel__body">
      <Swiper
        class="products-carousel__carousel"
        :slides-per-view="3"
        :space-between="10"
      >
        <SwiperSlide
          class="products-carousel__slide"
          v-for="(product, index) in products"
          :key="index"
        >
          <CardProduct style="height: 100%; width: 100%" :product="product" />
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script>
import CardProduct from "@/components/CardProduct.vue";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/navigation/navigation.scss"; // Navigation module
import "swiper/modules/pagination/pagination.scss"; // Pagination module

import Btn from "@/components/Btn.vue";
export default {
  components: {
    CardProduct,
    Swiper,
    SwiperSlide,
    Btn,
  },

  name: "ProductsCarousel",

  props: {
    products: {
      type: Array,
      reqired: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.products-carousel {
  background-color: #e0e4e7;
  border-radius: 25px 25px 0 0;
  height: 100%;
  padding-bottom: 25px;
  width: 100%;
}

.products-carousel__header {
  align-items: center;
  display: flex;
  padding: 16px 36px 20px;
}

.products-carousel__title {
  color: #3e4958;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
}

.products-carousel__btn {
  margin-left: auto;
}

.products-carousel__body {
  margin-right: -100px;
  padding-left: 36px;
}
</style>