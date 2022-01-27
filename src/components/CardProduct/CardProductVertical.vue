<template>
  <router-link
    :to="{
      name: 'ProductPage',
      params: { id: product.id },
    }"
    class="card"
  >
    <div class="card__btn-wish">
      <svg
        width="25"
        height="22"
        viewBox="0 0 25 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.0013 -1.29166e-05C15.4189 -3.05176e-05 14.3988 0.188491 13.2295 0.760851C12.7966 0.972758 12.3904 1.22796 12.0132 1.52568C11.6505 1.24465 11.2606 1.00117 10.8456 0.795898C9.65357 0.206321 8.58119 -3.05176e-05 7.05551 -3.05176e-05C2.96936 -3.05176e-05 0 3.38561 0 7.78275C0 11.1035 1.85154 14.3112 5.3003 17.413C7.11054 19.0412 9.42184 20.6524 11.0771 21.5095L12.0242 22L12.9712 21.5095C14.6265 20.6524 16.9378 19.0412 18.748 17.413C22.1968 14.3112 24.0483 11.1035 24.0483 7.78275C24.0483 3.43215 21.051 0.0167578 17.0013 -1.29166e-05ZM21.8621 7.78275C21.8621 10.3844 20.3167 13.0618 17.2861 15.7876C15.6338 17.2736 13.5097 18.7587 12.0242 19.5378C10.5387 18.7587 8.41454 17.2736 6.76226 15.7876C3.73167 13.0618 2.18621 10.3844 2.18621 7.78275C2.18621 4.53387 4.24523 2.18618 7.05551 2.18618C8.26857 2.18618 9.01608 2.33002 9.87637 2.75552C10.3845 3.00685 10.8336 3.33872 11.2224 3.75345L12.0267 4.61146L12.8237 3.74665C13.2212 3.31531 13.677 2.97588 14.1906 2.72446C15.0257 2.31571 15.7265 2.18618 16.9968 2.18619C19.7723 2.19769 21.8621 4.57895 21.8621 7.78275Z"
          fill="#97ADB6"
        />
      </svg>
    </div>
    <img
      class="card__img"
      :src="require(`@/assets/img-sneakers/${product.img}`)"
    />
    <div class="card__name">{{ product.name }}</div>
    <div class="card__colors">{{ product.countColors }} Colors</div>
    <div class="card__bottom">
      <div class="card__price">${{ product.price }}</div>
      <Button
        class="card__btn"
        @click.prevent="addProduct(product)"
        variant="secondary"
        text="Add"
        size="small"
      />
    </div>
  </router-link>
</template>
<script>
import { mapActions } from "vuex";
import Button from "@/components/Button.vue";

export default {
  components: { Button },
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
  display: block;
  border: 1px solid transparent;
  background-color: #fefefe;
  border-radius: 16px;
  padding: 0.625rem 0.5rem;
  transition: $transition-base;
  position: relative;

  &:hover {
    border-color: $gray;
  }
}

.card__btn-wish {
  cursor: pointer;
  position: absolute;
  right: 10%;
  top: 7%;

  &:hover path {
    fill: #4a5562;
  }
}

.card__img {
  aspect-ratio: 125 / 135;
  border: 0.5px solid $secondary;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
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
  cursor: pointer;
  font-size: 0.65rem;
  height: 1rem;
  width: 30%;

  &:hover {
    color: $fc-gray;
    font-weight: 600;
  }
}
</style>>