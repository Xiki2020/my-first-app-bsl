<template>
  <Swiper
    slides-per-view="auto"
    :space-between="18"
    :pagination="paginationOptions"
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

  data () {
    return {
      paginationOptions: {
        clickable: true
      }
    }
  }
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

::v-deep {
  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .custom-bullet {
    display: block;
    background-color: #97ADB6;
    width: 5px;
    height: 5px;
    border-radius: 50%;

    &:not(:last-child) {
      margin-right: 5px;
    }
  }

  .custom-bullet--active {
    background-color: #3E4958;
  }
}
</style>