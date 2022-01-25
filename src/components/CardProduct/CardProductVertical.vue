<template>
  <div class="card">
    <img
      class="card__img"
      :src="require(`@/assets/img-sneakers/${product.img}`)"
      @click="
        $router.push({
          name: 'ProductPage',
          params: { id: product.id },
        })
      "
    />
    <div class="card__name">{{ product.name }}</div>
    <div class="card__colors">{{ product.countColors }} Colors</div>
    <div class="card__bottom">
      <div class="card__price">${{ product.price }}</div>
      <div class="card__btn" @click.stop="addProduct(product)">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.5 5.5H11V6.5H6.5V11H5.5V6.5H1V5.5H5.5V1H6.5V5.5Z"
            fill="#3E4958"
            stroke="#3E4958"
            stroke-width="0.5"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "CardProductVertical",

  props: {
    product: {
      type: Object,
      reqired: true,
    },
  },

  methods: mapActions("cart", ["addProduct"]),
};
</script>
<style  lang="scss" scoped>
.card {
  background-color: #fefefe;
  border-radius: 16px;
  padding: 0.625rem 0.5rem;
}
.card__img {
  aspect-ratio: 125 / 135;
  border: 0.5px solid $secondary;
  border-radius: 10px;
  cursor: pointer;
  object-fit: fill;
  transition: $transition-base;
  width: 100%;

  &:hover {
    border-color: $gray;
  }
}
.card__name {
  color: $fc-gray;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.15;
  margin-top: 0.625rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.card__colors {
  background-color: #9ea8ac;
  border-radius: 4px;
  color: $white;
  font-size: 0.5rem;
  font-weight: 600;
  line-height: 20px;
  margin-top: 3px;
  text-align: center;
  width: 54px;
}
.card__bottom {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 0.625rem;
}
.card__price {
  color: $fc-gray;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.25;
}
.card__btn {
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 1rem;
  justify-content: flex-end;
  transition: $transition-base;
  width: 20px;

  &:hover {
    opacity: 0.8;
  }
}
</style>>