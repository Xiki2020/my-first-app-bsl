<template>
  <article class="popular-product">
    <div class="popular-product__content">
      <div class="popular-product__pictures-product">
        <img
          src="../assets/popular-sneaker.jpg"
          alt="picture of a sneaker"
          width="100%"
        />
      </div>
      <div class="popular-product__description-product">
        <h3 class="popular-product__header">Popular</h3>
        <p class="popular-product__model-product">Air Max 2090</p>
        <button class="popular-product__btn-buy">Buy now</button>
      </div>
    </div>
    <div class="popular-product__control-slider">
      <div class="popular-product__elem-control popular-product__activ"></div>
      <div class="popular-product__elem-control"></div>
      <div class="popular-product__elem-control"></div>
    </div>
  </article>
</template>
<script>
export default {
  name: "SliderPopularProduct",
  props: {},
};
</script>

<style scoped>
.popular-product {
  background-color: #ffffff;
  border-radius: 19px;
  box-shadow: -5px 15px 35px rgba(35, 35, 35, 0.1);
  height: 145px;
  padding: 14px;
  padding-bottom: 16px;
  width: 81%;
}

.popular-product__content {
  display: flex;
  justify-content: space-between;
}

.popular-product__pictures-product {
  border: 0.5px solid #d5dde0;
  border-radius: 10px;
  height: 94px;
  overflow: hidden;
  width: 164px;
}

.popular-product__description-product {
  margin-left: 5px;
}

.popular-product__header {
  color: #3e4958;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0em;
  line-height: 15px;
  margin: 8px 0 2px;
}

.popular-product__model-product {
  color: #3e4958;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0em;
  margin: 0 0 8px;
}

.popular-product__btn-buy {
  background-color: #3e4958;
  border: none;
  border-radius: 7px;
  color: #ffffff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: 0em;
  height: 36px;
  width: 73px;
}

.popular-product__control-slider {
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin: 16px auto 0;
  width: 22.5px;
}

.popular-product__elem-control {
  background-color: #97adb6;
  border-radius: 50%;
  height: 5px;
  width: 5px;
}

.popular-product__activ {
  background-color: #3e4958;
}
</style>