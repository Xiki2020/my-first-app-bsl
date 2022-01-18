<template>
  <Swiper
    slides-per-view="auto"
    :space-between="18"
    :pagination="{
      clickable: true,
    }"
    class="slider-popular-product"
  >
    <SwiperSlide v-for="(product, index) in products" :key="index">
      <CardPopularProduct style="width: 100%" :product="product" />
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import CardPopularProduct from "@/components/CardPopularProduct.vue";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";

export default {
  components: {
    Swiper,
    SwiperSlide,
    CardPopularProduct,
  },

  name: "PopularProductsCarousel",

  props: {
    products: {
      type: Array,
      reqired: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.slider-popular-product {
  height: 145px;
  background-color: #ffffff;
  border-radius: 19px;
  box-shadow: -5px 15px 35px rgba(35, 35, 35, 0.1);
  padding: 0.8125rem 0.8125rem 1rem;
  width: calc(100% - 4.5rem);
}
.swiper-pagination-bullet {
  $--swiper-pagination-bullet-size: 5px;
  width: $--swiper-pagination-bullet-size;
}
</style>