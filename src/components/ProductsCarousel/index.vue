<template>
  <div class="products-carousel">
    <div class="products-carousel__header">
      <div class="products-carousel__title">New Products</div>
      <BaseBtn text="View All" />
    </div>
    <div class="products-carousel__body">
      <Swiper :slides-per-view="3" :space-between="10">
        <SwiperSlide v-for="(product, index) in products" :key="index">
          <CardProduct style="height: 100%; width: 100%" :product="product" />
        </SwiperSlide>
        <SwiperSlide />
      </Swiper>
    </div>
  </div>
</template>

//::v-deep

<script>
import BaseBtn from "@/components/BaseBtn.vue";
import CardProduct from "@/components/CardProduct.vue";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";

import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";

export default {
  components: {
    BaseBtn,
    CardProduct,
    Swiper,
    SwiperSlide,
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
  justify-content: space-between;
  padding: 16px 36px 19px;
}

.products-carousel__title {
  color: #3e4958;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
}

.products-carousel__body {
  margin-right: -100px;
  padding-left: 36px;
}
</style>