<template>
  <Swiper
    slides-per-view="auto"
    :space-between="18"
    :pagination="paginationOptions"
    class="slider-popular-product"
  >
    <SwiperSlide
      v-for="(product, index) in products"
      :key="index"
    >
      <CardProductPopular :product="product" />
    </SwiperSlide>
  </Swiper>
</template>

<script>
import CardProductPopular from "@/components/CardProduct/CardProductPopular.vue"
import SwiperCore, { Pagination } from "swiper"

SwiperCore.use([Pagination])

export default {

  name: "ProductsSlider",
  components: {
    CardProductPopular,
  },

  props: {
    products: {
      type: Array,
      reqired: true,
      default: () => [],
    },
  },

  data() {
    return {
      paginationOptions: {
        clickable: true,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.slider-popular-product {
  background-color: $white;
  border-radius: 19px;
  box-shadow: -5px 15px 35px rgba(35, 35, 35, 0.1);
  padding: 0.8125rem 0.8125rem 2.4rem;
}
</style>