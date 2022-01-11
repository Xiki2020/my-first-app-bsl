<template>
  <Swiper
    :slides-per-view="auto"
    :space-between="14"
    :pagination="{
      clickable: true,
    }"
    class="swiper"
  >
    <SwiperSlide>
      <CardPopularProduct style="width: 100%" />
    </SwiperSlide>
    <SwiperSlide>
      <CardPopularProduct style="width: 100%" />
    </SwiperSlide>
    <SwiperSlide>
      <CardPopularProduct style="width: 100%" />
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

  date() {
    return {};
  },

  name: "PopularProductsCarousel",

  props: {},
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 145px;
  background-color: #ffffff;
  border-radius: 19px;
  box-shadow: -5px 15px 35px rgba(35, 35, 35, 0.1);
  padding: 14px 14px 16px;
  width: 81%;
}
</style>