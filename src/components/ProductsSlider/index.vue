<template>
  <Swiper
    slides-per-view="auto"
    :space-between="18"
    :pagination="paginationOptions"
    class="slider-popular-product"
  >
    <SwiperSlide v-for="(product, index) in products" :key="index">
      <CardProductPopular :product="product" />
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue.js";
import CardProductPopular from "@/components/CardProduct/CardProductPopular.vue";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";

export default {
  components: {
    CardProductPopular,
    Swiper,
    SwiperSlide,
  },

  name: 'ProductsSlider',

  props: {
    products: {
      type: Object,
      reqired: true,
    },
  },

  data() {
    return {
      paginationOptions: {
        clickable: true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.slider-popular-product {
  height: 145px;
  background-color: $white;
  border-radius: 19px;
  box-shadow: -5px 15px 35px rgba(35, 35, 35, 0.1);
  padding: 0.8125rem 0.8125rem 1rem;
}
</style>