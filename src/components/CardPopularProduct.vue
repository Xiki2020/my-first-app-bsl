<template>
  <article class="popular-product">
    <div class="popular-product__content">
      <div class="popular-product__pictures-product">
        <img src="../assets/popular-sneaker.jpg" alt="picture of a sneaker" />
      </div>
      <div class="popular-product__description-product">
        <div class="popular-product__header">Popular</div>
        <div class="popular-product__model-product">Air Max 2090</div>
        <Btn class="popular-product__btn" text="Buy now" variant="gray" />
      </div>
    </div>
  </article>
</template>

<script>
import Btn from "@/components/Btn.vue";

export default {
  components: {
    Btn,
  },
  name: "CardPopularProduct",
  props: {},
};
</script>

<style lang="scss" scoped>
.popular-product {
  background-color: #ffffff;
  color: #3e4958;
  height: 100%;
  width: 100%;
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
  img {
    object-fit: cover;
    width: 100%;
  }
}

.popular-product__description-product {
  margin-left: 5px;
}

.popular-product__header {
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  margin-top: 8px;
}

.popular-product__model-product {
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  margin-top: 2px;
}

.popular-product__btn {
  margin-top: 8px;
}
</style>