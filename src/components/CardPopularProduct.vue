<template>
  <div class="popular-product">
    <img
      :src="require(`@/assets/img-sneakers/${product.img}`)"
      class="popular-product__img"
    />
    <div class="popular-product__description">
      <div class="popular-product__header">Popular</div>
      <div class="popular-product__name" :title="product.name">
        {{ product.name }}
      </div>
      <AppButton
        class="popular-product__btn"
        text="Buy now"
        variant="gray"
        size="small"
        @click="$router.push({ name: 'TempPage' })"
      />
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
  components: {
    AppButton,
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
  background-color: $white;
  color: $fc-gray;
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
  object-fit: fill;
  width: 60%;
}
.popular-product__description {
  margin-left: 0.3125rem;
  width: 40%;
}
.popular-product__header {
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.25;
  margin-top: 0.5rem;
}
.popular-product__name {
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25;
  margin-top: 0.125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.popular-product__btn {
  margin-top: 0.5rem;
}
</style>