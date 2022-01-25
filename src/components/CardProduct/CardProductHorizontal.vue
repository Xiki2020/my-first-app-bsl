<template>
  <div class="card-product">
    <img
      class="card-product__img"
      :src="require(`@/assets/img-sneakers/${product.img}`)"
    />
    <div class="card-product__content">
      <div class="card-product__name">{{ product.name }}</div>
      <div class="card-product__price">${{ product.price }}</div>
      <div class="card-product__count-block">
        <div
          class="card-product__count-nav"
          @click="changeCountProduct({ id: product.id })"
        >
          -
        </div>
        <div class="card-product__count">{{ product.count }}</div>
        <div
          class="card-product__count-nav"
          @click="changeCountProduct({ id: product.id, action: 'add' })"
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
.card-product {
  background-color: #fefefe;
  border: 0.5px solid $secondary;
  border-radius: 14px;
  display: flex;
  height: 112px;
  padding: 0.375rem;
}
.card-product__img {
  border: 0.5px solid $secondary;
  border-radius: 10px;
  height: 100px;
  object-fit: fill;
  aspect-ratio: 125 / 135;
}
.card-product__content {
  padding: 0.75rem;
}
.card-product__name {
  color: $fc-gray;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.15;
  margin-top: 0.625rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card-product__price {
  color: $fc-gray;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 23px;
}
.card-product__count-block {
  align-items: center;
  color: $fc-gray;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  margin-top: 0.75rem;
  width: 65px;
}
.card-product__count {
  border: 1px solid $secondary;
  border-radius: 4px;
  height: 23px;
  line-height: 23px;
  text-align: center;
  width: 23px;
}

.card-product__count-nav {
  cursor: pointer;
}
</style>