<template>
  <div class="card">
    <img
      :src="require(`@/assets/img-sneakers/${product.img}`)"
      class="card__img"
    />
    <div class="card__descr">
      <div class="card__category">Popular</div>
      <div class="card__title" :title="product.name">
        {{ product.name }}
      </div>
      <AppButton
        class="card__btn"
        text="Buy now"
        variant="gray"
        size="small"
        @click="
          $router.push({
            name: 'ProductPage',
            params: { id: product.id },
          })
        "
      />
    </div>
  </div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

import { mapActions } from "vuex";

export default {
  components: {
    AppButton,
  },

  name: "CardProductPopular",

  props: {
    product: {
      type: Object,
      reqired: true,
    },
  },

  methods: mapActions("cart", ["addProduct"]),
};
</script>

<style lang="scss" scoped>
.card {
  background-color: $white;
  color: $fc-gray;
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 100%;
}
.card__img {
  aspect-ratio: 164 / 94;
  border: 0.5px solid $secondary;
  border-radius: 10px;
  height: 94px;
  object-fit: fill;
  width: 60%;
}
.card__descr {
  margin-left: 0.3125rem;
  width: 40%;
}
.card__category {
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.25;
  margin-top: 0.5rem;
}
.card__title {
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25;
  margin-top: 0.125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card__btn {
  margin-top: 0.5rem;
}
</style>