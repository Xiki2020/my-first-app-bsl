<template>
  <div
    class="card"
    @click="
      $router.push({
        name: 'ProductPage',
        params: { id: product.id },
      })
    "
  >
    <img
      class="card__img"
      :src="require(`@/assets/img-sneakers/${product.img}`)"
    />
    <div class="card__content">
      <div class="card__title">{{ product.name }}</div>
      <div class="card__price">${{ product.price }}</div>
      <div class="card__nav-block">
        <div
          class="card__nav"
          @click.stop="changeCountProduct({ id: product.id })"
        >
          -
        </div>
        <div class="card__count">{{ product.count }}</div>
        <div
          class="card__nav"
          @click.stop="changeCountProduct({ id: product.id, action: 'add' })"
        >
          +
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CardProductHorizontal",

  props: {
    product: {
      type: Object,
      reqired: true,
    },
  },

  methods: mapActions("cart", ["changeCountProduct"]),
};
</script>

<style lang="scss" scoped>
.card {
  background-color: #fefefe;
  border: 0.5px solid $secondary;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  height: 112px;
  padding: 0.375rem;
  transition: $transition-base;

  &:hover {
    border-color: $gray;
  }
}
.card__img {
  aspect-ratio: 125 / 135;
  border: 0.5px solid $secondary;
  border-radius: 10px;
  height: 100px;
  object-fit: fill;
}
.card__content {
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem;
}
.card__title {
  color: $fc-gray;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.15;
  margin-top: 0.625rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card__price {
  color: $fc-gray;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.5rem;
}
.card__nav-block {
  align-items: center;
  color: $fc-gray;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  margin-top: auto;
  width: 80%;
}
.card__count {
  border: 1px solid $secondary;
  border-radius: 4px;
  line-height: 2rem;
  text-align: center;
  transition: $transition-base;
  width: calc(100% / 3);
}
.card__nav {
  border-radius: 7px;
  color: $fc-gray;
  cursor: pointer;
  font-size: 1.1rem;
  height: 100%;
  line-height: 2rem;
  text-align: center;
  transition: $transition-base;
  width: calc(100% / 3);

  &:hover {
    background-color: $light-gray;
  }
}
</style>