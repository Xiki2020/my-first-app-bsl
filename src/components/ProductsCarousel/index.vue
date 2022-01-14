<template>
  <Swiper :slides-per-view="3" :space-between="10" class="products-carousel">
    <SwiperSlide v-for="(product, index) in products" :key="index">
      <CardProduct :product="product" />
    </SwiperSlide>
    <SwiperSlide />
  </Swiper>
</template>
<script>
import CardProduct from "@/components/CardProduct.vue";
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";

import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";

export default {
  components: {
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
  margin-right: -100px;
  padding-left: 36px;
}
</style>