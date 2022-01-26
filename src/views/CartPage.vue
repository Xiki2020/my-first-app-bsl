<template>
  <AppWrapper class="cart">
    <div class="cart__title">Add more products to your cart!</div>
    <InputSearch class="cart__search" @input="addValue" />
    <div class="cart__products">
      <CardProductHorizontal
        v-for="product in getFilterProducts(value)"
        :key="product.name"
        :product="product"
        class="cart__product"
      />
    </div>
    <div class="cart__bottom">
      <form class="cart__promocode-form">
        <input
          type="text"
          class="cart__promocode-input"
          placeholder="Enter code voucher"
        />
        <AppButton
          text="Apply"
          variant="secondary"
          class="cart__promocode-btn"
        />
      </form>
      <div class="cart__price-block">
        <div class="cart__price-title">In total</div>
        <div class="cart__price">${{ getPriceCart }}</div>
      </div>
      <AppButton text="Checkout" class="cart__btn" />
    </div>
  </AppWrapper>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import AppWrapper from "@/components/AppWrapper.vue";
import CardProductHorizontal from "@/components/CardProduct/CardProductHorizontal.vue";
import InputSearch from "@/components/FormComponents/InputSearch.vue";

import { mapGetters } from "vuex";

export default {
  name: "CartPage",

  components: {
    AppButton,
    AppWrapper,
    CardProductHorizontal,
    InputSearch,
  },

  data() {
    return {
      value: "",
    };
  },

  computed: {
    ...mapGetters("cart", ["getCart", "getPriceCart", "getFilterProducts"]),
  },

  methods: {
    addValue(value) {
      this.value = value;
    },
  },
};
</script>
<style lang="scss" scoped>
.cart {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  min-height: calc(100vh - 130px);
  padding-bottom: 4.25rem;
}
.cart__title {
  color: $fc-gray;
  font-size: 0.8125rem;
  line-height: 1.85;
}
.cart__search {
  margin-top: 1.3125rem;
}
.cart__products {
  margin-top: 2rem;
}
.cart__product {
  & + & {
    margin-top: 1rem;
  }
}
.cart__bottom {
  margin-top: auto;
  padding: 1rem 0;
}
.cart__promocode-form {
  display: flex;
  justify-content: space-between;
}
.cart__promocode-input {
  background-color: #f7f8f9;
  border: 0.5px solid $secondary;
  border-radius: 14px;
  height: 60px;
  margin-right: 1.2rem;
  outline: none;
  padding: 20px 17px;
  width: 65%;

  &:hover,
  &:focus {
    border-color: black;
  }

  &::placeholder {
    color: $secondary;
    font-size: $font-size-base;
  }
}
.cart__promocode-btn {
  width: 35%;
}
.cart__price-block {
  color: $fc-gray;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 2.875rem;
}
.cart__btn {
  margin-top: 1.625rem;
}
</style>