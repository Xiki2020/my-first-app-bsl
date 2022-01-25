<template>
  <AppWrapper class="product-page">
    <div class="product-page__header">
      <AppButton @click="$router.go(-1)" class="product-page__btn">
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.82828 8.29289L18.4141 8.29289L18.4141 10.2929L3.82828 10.2929L10.1212 16.5858L8.70696 18L-0.000149919 9.29289L8.70696 0.585786L10.1212 2L3.82828 8.29289Z"
            fill="#3E4958"
          />
        </svg>
      </AppButton>
      <div class="product-page__title">
        {{ product.name }}
      </div>
    </div>
    <div class="product-page__body">
      <div class="product-page__content">
        <img
          class="product-page__img"
          :src="require(`@/assets/img-sneakers/${product.img}`)"
        />
        <div class="product-page__colors">{{ product.countColors }} Colors</div>
        <div class="product-page__price">${{ product.price }}</div>
      </div>
      <AppButton
        text="Add to Cart"
        class="product-page__btn-add"
        @click="addProduct(product)"
      ></AppButton>
    </div>
  </AppWrapper>
</template>
<script>
import AppButton from "@/components/AppButton.vue";
import AppWrapper from "@/components/AppWrapper.vue";

import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    AppButton,
    AppWrapper,
  },
  name: "ProductPage",

  data() {
    return {
      product: {},
    };
  },

  computed: {
    ...mapGetters("catalog", ["getProductId"]),
  },

  methods: {
    ...mapActions("cart", ["addProduct"]),

    getProduct() {
      this.product = this.getProductId(this.$route.params.id);
    },
  },

  created() {
    this.getProduct();
  },
};
</script>
<style  lang="scss" scoped>
.product-page {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 568px;
  justify-content: center;
}
.product-page__header {
  align-items: center;
  display: flex;
  margin-top: auto;
  padding-top: 3.125rem;
  width: 100%;
}
.product-page__btn {
  background-color: transparent;
  display: inline-block;
  width: auto;
  height: auto;
  line-height: 1;
  padding: 0;

  &:hover {
    opacity: 0.8;
    transform: none;
  }
}
.product-page__title {
  color: $fc-gray;
  display: inline-block;
  font-weight: 600;
  font-size: 1.625rem;
  line-height: 1.25;
  margin-left: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product-page__body {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}
.product-page__content {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}
.product-page__img {
  aspect-ratio: 125 / 135;
  border: 0.5px solid $secondary;
  border-radius: 20px;
  object-fit: cover;
  margin-top: 1rem;
  width: 100%;
}
.product-page__colors {
  background-color: #9ea8ac;
  border-radius: 7px;
  color: $white;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  margin-top: 1rem;
  text-align: center;
}
.product-page__price {
  color: $fc-gray;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.25;
  margin-top: 1rem;
  text-align: center;
}
.product-page__btn-add {
  cursor: pointer;
  margin-top: auto;
}
</style>>