<template>
  <div class="products-carousel">
    <div class="products-carousel__header">
      <h3 class="products-carousel__title">New Products</h3>
      <Btn class="products-carousel__btn" text="View All" />
    </div>
    <div class="products-carousel__slider-container">
      <CardProduct v-for="card in cards" :key="card.name" :card="card" />
    </div>
  </div>
</template>

<script>
import CardProduct from "@/components/CardProduct.vue";
import Btn from "@/components/Btn.vue";
export default {
  components: {
    CardProduct,
    Btn,
  },
  name: "ProductsCarousel",
};
</script>

<style lang="scss" scoped>
.products-carousel {
  background-color: #f7f8f9;
  border-radius: 25px 25px 0 0;
  height: 100%;
  padding: 0 9.6%;
  width: 100%;
}

.products-carousel__header {
  align-items: center;
  display: flex;
  padding-top: 24px;
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

.products-carousel__slider-container {
  display: flex;
  margin: 0 -4.5px;
  padding-top: 19px;
  text-align: center;
}
</style>