<template>
  <div class="product" v-if="getProduct.id">
    <Header>
      {{ getProduct.title }}
    </Header>
    <div class="product__body">
      <div class="product__content">
        <img class="product__img" :src="getProduct.image" />
        <!-- <div class="product__colors">{{ product.countColors }} Colors</div> -->
        <div class="product__price">${{ getProduct.price }}</div>
      </div>
      <Button
        text="Add"
        class="product__btn-add"
        @click="addProduct(getProduct)"
        :variant="getRole === 'user' ? 'primary' : 'secondary'"
        :disabled="!(getRole === 'user')"
      />
    </div>
  </div>
  <div class="err" v-else>Page not found</div>
</template>
<script>
import Button from "@/components/Button.vue";
import Header from "@/components/Header.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Button,
    Header,
  },
  name: "ProductPage",

  data() {
    return {
      product: {},
    };
  },

  computed: {
    ...mapGetters("catalog", ["getProductId", "getProduct"]),
    ...mapGetters(["getRole"]),
  },

  methods: {
    ...mapActions("cart", ["addProduct"]),
    ...mapActions("catalog", ["fetchProducts", "fetchProduct"]),

    //  getProduct() {
    //    this.product = this.getProductId(this.$route.params.id);
    //  },
  },

  created() {
    this.fetchProduct(this.$route.params.id);
    //  this.fetchProducts();
    //  this.getProduct();
  },
};
</script>
<style  lang="scss" scoped>
.product {
  align-items: center;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 1rem;
}
.product__header {
  align-items: center;
  display: flex;
  width: 100%;
}
.product__btn {
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
.product__title {
  color: $fc-gray;
  display: inline-block;
  font-weight: 600;
  font-size: 1.625rem;
  line-height: 1.25;
  margin-left: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product__body {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
}
.product__content {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin-bottom: 1rem;
}
.product__img {
  aspect-ratio: 125 / 135;
  border: 0.5px solid $secondary;
  border-radius: 20px;
  object-fit: cover;
  margin-top: 1rem;
  width: 100%;
}
.product__colors {
  background-color: #9ea8ac;
  border-radius: 7px;
  color: $white;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  margin-top: 1rem;
  text-align: center;
}
.product__price {
  color: $fc-gray;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.25;
  margin-top: 1rem;
  text-align: center;
}
.product__btn-add {
  cursor: pointer;
  margin-top: auto;
}
</style>>