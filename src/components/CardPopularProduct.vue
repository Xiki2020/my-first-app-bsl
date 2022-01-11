<template>
  <div class="popular-product">
    <img
      :src="require(`@/assets/${product.img}`)"
      class="popular-product__img"
    />
    <div class="popular-product__description">
      <div class="popular-product__header">Popular</div>
      <div class="popular-product__name" :title="product.name">
        {{ product.name }}
      </div>
      <Btn class="popular-product__btn" text="Buy now" variant="gray" />
    </div>
  </div>
</template>

<script>
import Btn from "@/components/Btn.vue";

export default {
  components: {
    Btn,
  },
  name: "CardPopularProduct",
  props: {
    product: {
      type: Object,
      reqired: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.popular-product {
  background-color: #ffffff;
  color: #3e4958;
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 100%;
}

.popular-product__img {
  aspect-ratio: 164 / 94;
  border: 0.5px solid #d5dde0;
  border-radius: 10px;
  height: 94px;
  object-fit: cover;
  width: 60%;
}

.popular-product__description {
  margin-left: 5px;
  width: 40%;
}

.popular-product__header {
  font-size: 12px;
  font-weight: 600;
  line-height: 1.25;
  margin-top: 8px;
}

.popular-product__name {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.25;
  margin-top: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.popular-product__btn {
  margin-top: 8px;
}
</style>