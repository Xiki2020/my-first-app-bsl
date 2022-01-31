<template>
  <div
    class="card"
    @click="
      $router.push({
        name: 'ProductPage',
        params: { id: product.id },
      })
    "
  >
    <img
      class="card__img"
      :src="product.image"
    >
    <div class="card__content">
      <div class="card__title">
        {{ product.title }}
      </div>
      <div class="card__price">
        ${{ product.price }}
      </div>
      <Amount
        :product="product"
        class="card__btns"
      />
    </div>
  </div>
</template>

<script>
import Amount from "@/components/Amount.vue"

export default {

  name: "CardProductHorizontal",
  components: {
    Amount,
  },

  props: {
    product: {
      type: Object,
      reqired: true,
		default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #fefefe;
  border: 0.5px solid $secondary;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  padding: 0.375rem;
  transition: $transition-base;

  &:hover {
    border-color: $gray;
  }
}
.card__img {
  aspect-ratio: 125 / 135;
  border: 0.5px solid $secondary;
  border-radius: 10px;
  height: 100px;
  object-fit: fill;
}
.card__content {
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem;
  width: 80%;
}
.card__title {
  color: $fc-gray;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.15;
  margin-top: 0.625rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: break-spaces;
}
.card__price {
  color: $fc-gray;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.5rem;
}
.card__btns {
  margin-top: auto;
  width: 40%;
}
</style>