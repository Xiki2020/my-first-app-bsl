<template>
  <div
    v-if="getProduct.id"
    class="product"
  >
    <Header>
      {{ getProduct.title }}
    </Header>
    <div class="product__content">
      <img
        class="product__img"
        :src="getProduct.image"
      >
      <div class="product__price">
        ${{ getProduct.price }}
      </div>
    </div>
    <Button
      text="Add"
      class="product__btn-add"
      :variant="getRole === 'user' ? 'primary' : 'secondary'"
      :disabled="!(getRole === 'user')"
      @click="addProduct(getProduct), showNotification()"
    />
  </div>
  <div
    v-else
    class="loader"
  >
    <Loader />
  </div>
</template>
<script>
import Button from "@/components/Button.vue"
import Header from "@/components/Header.vue"
import Loader from "@/components/Loader.vue"

import {
  mapGetters,
  mapActions
} from "vuex"

export default {
  name: "ProductPage",
  components: {
    Button,
    Header,
    Loader,
  },

  data() {
    return {
      product: {},
      isAdditionalProductsLoading: false,
    }
  },

  computed: {
    ...mapGetters("catalog", ["getProduct"]),
    ...mapGetters(["getRole"]),
  },

  async created() {
    this.fetchProductId()
  },

  beforeUnmount () {
    this.resetProduct()
  },

  methods: {
    ...mapActions("cart", ["addProduct"]),
    ...mapActions("catalog", ["fetchProduct", 'resetProduct']),

     fetchProductId() {
       this.product = this.fetchProduct(this.$route.params.id)
     },

	  showNotification() {
		this.$toast.clear()
		this.$toast.success("Added to cart", {position: 'top'})
	},
  },
}
</script>
<style  lang="scss" scoped>
.product {
  align-items: center;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 1rem;
  width: 100%;
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

.loader {
  align-items: center;
  display: flex;
  flex: 1 0 0;
  justify-content: center;
}
</style>>