<template>
  <div class="card-product">
    <img class="card-product__img" :src="require(`@/assets/${product.img}`)" />
    <div class="card-product__name">{{ product.name }}</div>
    <div class="card-product__colors">{{ product.countColors }} Colors</div>
    <div class="card-product__bottom">
      <div class="card-product__price">{{ product.price }}</div>
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        @click="$router.push({ name: 'Temp' })"
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
</template>
<script>
export default {
  name: "CardProduct",
  props: {
    product: {
      type: Object,
      reqired: true,
    },
  },
};
</script>
<style  lang="scss" scoped>
.card-product {
  background-color: #fefefe;
  border-radius: 16px;
  padding: 10px 8px;
}

.card-product__img {
  border: 0.5px solid #d5dde0;
  border-radius: 10px;
  object-fit: fill;
  aspect-ratio: 125 / 135;
  width: 100%;
}

.card-product__name {
  color: #3e4958;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.15;
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-product__colors {
  background-color: #9ea8ac;
  border-radius: 4px;
  color: #ffffff;
  font-size: 9px;
  font-weight: 600;
  line-height: 20px;
  margin-top: 3px;
  text-align: center;
  width: 54px;
}

.card-product__bottom {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.card-product__price {
  color: #3e4958;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.25;
}

// .card-product__btn-add {
//   background-color: transparent;
//   border: none;
//   height: 10px;
//   outline: none;
//   padding: 0;
// }
</style>>