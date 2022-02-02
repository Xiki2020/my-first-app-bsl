<template>
  <Swiper
    :slides-per-view="3"
    :space-between="10"
    class="products-carousel"
  >
    <SwiperSlide
      v-for="(product, index) in products"
      :key="index"
    >
      <CardProduct :product="product" />
    </SwiperSlide>
    <SwiperSlide />
  </Swiper>
</template>
<script>
import CardProduct from "@/components/CardProduct/CardProduct.vue"

export default {

  name: "ProductsCarousel",
  components: {
    CardProduct,
  },

  props: {
    products: {
      type: Array,
      reqired: true,
		default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.products-carousel {
  margin-right: -25%;
  padding-left: 2.25rem;
  user-select: none;
}
</style>