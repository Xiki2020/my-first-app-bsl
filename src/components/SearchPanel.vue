<template>
  <AppWrapper class="search-panel">
    <div class="search-panel__nav">
      <div class="search-panel__name-nav">Search results:</div>
    </div>
    <div class="search-panel__results" v-if="products.length > 0">
      <div
        class="search-panel__result"
        v-for="product in products"
        :key="product.name"
        @click="
          $router.push({
            name: 'ProductPage',
            params: { id: product.id },
          })
        "
      >
        {{ product.name }}
        <img
          :src="require(`@/assets/img-sneakers/${product.img}`)"
          class="search-panel__result-img"
        />
      </div>
    </div>
    <h3 class="search-panel__not-found" v-else>Not found</h3>
  </AppWrapper>
</template>

<script>
import AppWrapper from "@/components/AppWrapper.vue";

export default {
  components: {
    AppWrapper,
  },
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
  height: 100vh;
  overflow-y: scroll;
  width: 100vw;
}
.search-panel__nav {
  padding-top: 10rem;
}
.search-panel__name-nav {
  color: $fc-gray;
  font-weight: bold;
  font-size: 1.125rem;
}
.search-panel__results {
  color: $fc-gray;
  font-weight: 600;
  line-height: 60px;
  padding-top: 0.625rem;
}

.search-panel__result {
  align-items: center;
  border-top: 1px solid $secondary;
  border-bottom: 1px solid $secondary;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
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
  height: 50px;
  object-fit: fill;
}
.search-panel__not-found {
  color: $fc-gray;
  margin-top: 2rem;
  text-align: center;
}
</style>