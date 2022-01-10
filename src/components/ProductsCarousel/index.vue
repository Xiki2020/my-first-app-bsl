<template>
  <div class="products-carousel" ref="container">
    <div class="products-carousel__header">
      <h3 class="products-carousel__title">New Products</h3>
      <Btn class="products-carousel__btn" text="View All" />
    </div>
    <div class="products-carousel__body">
      <Swiper
        class="products-carousel__carousel"
        :slides-per-view="auto"
        :space-between="10"
      >
        <SwiperSlide
          class="products-carousel__slide"
          v-for="(product, index) in products"
          :key="index"
        >
          <CardProduct
            :product="product"
          />
        </SwiperSlide>
      </swiper>
    </div>
  </div>
</template>

<script>
import CardProduct from "@/components/CardProduct.vue";
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module

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
  }
};
</script>

<style lang="scss" scoped>
.products-carousel {
  background-color: #e0e4e7;
  border-radius: 25px 25px 0 0;
  height: 100%;
  // padding: 0 9.6%;
  width: 100%;
}

.products-carousel__slide {
  max-width: 170px;
}

.products-carousel__header {
  align-items: center;
  display: flex;
  padding: 25px;
}

.products-carousel__title {
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

.products-carousel__btn {
  margin-left: auto;
}

.products-carousel__body {
  padding-left: 25px;
}
</style>