<template>
  <div class="amount">
    <div
      class="amount__nav"
      @click.stop="changeCountProduct({ id: product.id })"
    >
      -
    </div>
    <div class="amount__result" @click.stop>{{ product.count }}</div>
    <div
      class="amount__nav"
      @click.stop="changeCountProduct({ id: product.id, action: 'add' })"
    >
      +
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NavAmount",

  props: {
    product: {
      type: Object,
      reqired: true,
    },
  },

  methods: mapActions("cart", ["changeCountProduct"]),
};
</script>

<style lang="scss" scoped>
.amount {
  align-items: center;
  color: $fc-gray;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  user-select: none;
  width: 100%;
}
.amount__result {
  border: 1px solid $secondary;
  border-radius: 4px;
  line-height: 2rem;
  text-align: center;
  transition: $transition-base;
  width: calc(100% / 3);
}
.amount__nav {
  border-radius: 7px;
  color: $fc-gray;
  cursor: pointer;
  font-size: 1.1rem;
  height: 100%;
  line-height: 2rem;
  text-align: center;
  transition: $transition-base;
  width: calc(100% / 3);

  &:hover {
    background-color: $light-gray;
  }
}
</style>