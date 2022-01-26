<template>
  <AppWrapper class="search-page">
    <div class="search-page__nav">
      <div class="search-page__name-nav">Search results:</div>
    </div>
    <div class="search-page__results" v-if="products.length > 0">
      <div
        class="search-page__result"
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
          class="search-page__result-img"
        />
      </div>
    </div>
    <h3 class="search-page__not-found" v-else>Not found</h3>
  </AppWrapper>
</template>

<script>
import AppWrapper from "@/components/AppWrapper.vue";

export default {
  components: {
    AppWrapper,
  },
  name: "PageSearch",

  props: {
    products: {
      type: Array,
      reqired: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.search-page {
  height: 100vh;
  overflow-y: scroll;
  width: 100vw;
}
.search-page__nav {
  padding-top: 10rem;
}
.search-page__name-nav {
  color: $fc-gray;
  font-weight: bold;
  font-size: 1.125rem;
}
.search-page__results {
  color: $fc-gray;
  font-weight: 600;
  line-height: 60px;
  padding-top: 0.625rem;
}

.search-page__result {
  align-items: center;
  border-top: 1px solid $secondary;
  border-bottom: 1px solid $secondary;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  transition: $transition-base;

  &:hover {
    background-color: $light-gray;
    border-radius: 10px;
  }

  & + & {
    border-top: none;
  }
}
.search-page__result-img {
  aspect-ratio: 125 / 135;
  border: 0.5px solid $secondary;
  border-radius: 10px;
  height: 50px;
  object-fit: fill;
}
.search-page__not-found {
  color: $fc-gray;
  margin-top: 2rem;
  text-align: center;
}
</style>