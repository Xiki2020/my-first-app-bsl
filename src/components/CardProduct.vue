<template>
  <div class="card">
    <div class="card__img-item">
      <img :src="require('../assets/' + card.img)" alt="picture of a sneaker" />
    </div>
    <p class="card__name-product">{{ card.name }}</p>
    <p class="card__color-product">{{ card.countColors }} Colors</p>
    <div class="card__bottom">
      <p class="card__price-product">{{ card.price }}</p>
      <button class="card__btn-add-product">
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
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardProduct",
  props: {
    card: {
      type: Object,
      reqired: true,
    },
  },
  data() {
    return {
      test: this.card.img,
    };
  },
};
</script>
<style scoped>
.card {
  background-color: #fefefe;
  border-radius: 16px;
  height: 233px;
  margin: 0 4.5px;
  padding: 8px;
  padding-bottom: 15px;
  width: 140px;
}

.card__img-item {
  border-radius: 10px;
  height: 135px;
  overflow: hidden;
  width: 125px;
}

.card__img-item img {
  width: 100%;
  height: 100%;
}

.card__name-product {
  color: #3e4958;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  height: 14px;
  letter-spacing: 0em;
  line-height: 17px;
  margin: 8px 0 3px;
}

.card__color-product {
  background-color: #d5dde0;
  border-radius: 4px;
  color: #ffffff;
  font-family: Montserrat;
  font-size: 9px;
  font-style: normal;
  font-weight: 600;
  height: 20px;
  letter-spacing: 0em;
  line-height: 20px;
  margin: 0 0 10px;
  width: 54px;
}

.card__bottom {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-right: 9px;
}

.card__price-product {
  color: #3e4958;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0em;
  line-height: 17px;
  margin: 0;
}

.card__btn-add-product {
  background-color: transparent;
  border: none;
  height: 10px;
  outline: none;
  padding: 0;
}
</style>>