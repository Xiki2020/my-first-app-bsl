<template>
  <div class="cart">
    <TitleHeader> Add more products to your cart! </TitleHeader>
    <InputSearch
      class="cart__search"
      value=""
      @handInput="addValue"
    />
    <div class="cart__products">
      <CardProduct
        v-for="product in getFoundProducts(value)"
        :key="product.name"
        :product="product"
        variant="horizontal"
        class="cart__product"
      />
    </div>
    <div
      v-if="getFoundProducts(value).length"
      class="cart__bottom"
    >
      <form class="cart__promocode-form">
        <input
          v-model="promocode"
          type="text"
          class="cart__promocode-input"
          placeholder="Enter code voucher"
        >
        <Button
          :disabled="!promocode"
          text="Apply"
          :variant="promocode ? 'primary' : 'secondary'"
          class="cart__promocode-btn"
        />
      </form>
      <div class="cart__price-block">
        <div class="cart__price-title">
          In total
        </div>
        <div class="cart__price">
          ${{ getPriceCart }}
        </div>
      </div>
      <Button
        text="Checkout"
        class="cart__btn"
      />
    </div>
    <div
      v-else-if="getCart.length"
      class="cart__not-found"
    >
      Not found.
    </div>
    <div
      v-else
      class="cart__not-found"
    >
      Nothing added to cart.
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue"
import CardProduct from "@/components/CardProduct/CardProduct.vue"
import InputSearch from "@/components/FormComponents/InputSearch.vue"
import TitleHeader from "@/components/TitleHeader.vue"

import { mapGetters } from "vuex"

export default {
  name: "CartPage",

  components: {
    Button,
    CardProduct,
    InputSearch,
    TitleHeader,
  },

  data() {
    return {
      value: "",
      promocode: "",
    }
  },

  computed: {
    ...mapGetters("cart", ["getCart", "getPriceCart", "getFoundProducts"]),
  },

  methods: {
    addValue(value) {
      this.value = value
    },
  },
}
</script>
<style lang="scss" scoped>
.cart {
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
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
  background-color: $light-gray;
  border: 0.5px solid $secondary;
  border-radius: 14px;
  margin-right: 1.2rem;
  outline: none;
  padding: 1.25rem 1rem;
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

.cart__not-found {
  color: $fc-gray;
  font-size: 1.2rem;
  font-weight: 600;
}
</style>