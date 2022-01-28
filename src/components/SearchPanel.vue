<template>
  <div class="search-panel">
    <div class="search-panel__title">Search results:</div>
    <div class="search-panel__results" v-if="products.length > 0">
      <div
        class="search-panel__result"
        v-for="product in products"
        :key="product.title"
        @click="
          $router.push({
            name: 'ProductPage',
            params: { id: product.id },
          })
        "
      >
        {{ product.title }}
        <!-- <img
          :src="require(`@/assets/img-sneakers/${product.img}`)"
          class="search-panel__result-img"
        /> -->
        <img :src="product.image" class="search-panel__result-img" />
      </div>
    </div>
    <div class="search-panel__not-found" v-else>Not found</div>
  </div>
</template>

<script>
export default {
  name: "SearchPanel",

  props: {
    products: {
      type: Array,
      reqired: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.search-panel {
  background-color: $white;
  color: $fc-gray;
  height: 100vh;
  overflow-y: auto;
  padding: 0 $padding-side 3.125rem;
  transition: $transition-base;
  width: 100%;
}
.search-panel__title {
  font-weight: bold;
  font-size: 1.125rem;
  padding-top: 10rem;
}
.search-panel__results {
  font-weight: 600;
  padding-top: 0.625rem;
}

.search-panel__result {
  align-items: center;
  border-top: 1px solid $secondary;
  border-bottom: 1px solid $secondary;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
  padding: 1rem 0.5rem;
  transition: $transition-base;

  &:hover {
    background-color: $light-gray;
    border-radius: 10px;
  }

  & + & {
    border-top: none;
  }
}
.search-panel__result-img {
  aspect-ratio: 125 / 135;
  border: 0.5px solid $secondary;
  border-radius: 10px;
  height: 3.5rem;
  object-fit: fill;
}
.search-panel__not-found {
  color: $fc-gray;
  font-size: 1rem;
  margin-top: 2rem;
  text-align: center;
}
</style>