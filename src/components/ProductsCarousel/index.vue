<template>
  <Swiper :slides-per-view="3" :space-between="10" class="products-carousel">
    <SwiperSlide v-for="(product, index) in products" :key="index">
      <CardProductVertical :product="product" />
    </SwiperSlide>
    <SwiperSlide />
  </Swiper>
</template>
<script>
import CardProductVertical from "@/components/CardProduct/CardProductVertical.vue";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";

import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";

export default {
  components: {
    CardProductVertical,
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
  margin-right: -25%;
  min-height: 185px;
  padding-left: 2.25rem;
  user-select: none;
}
</style>