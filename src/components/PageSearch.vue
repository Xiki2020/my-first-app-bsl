<template>
  <AppWrapper class="search-page">
    <div class="search-page__nav">
      <div class="search-page__name-nav">Search results:</div>
    </div>
    <!-- <div class="search-page__results" v-if="foundProducts.length > 0">
      <div
        class="search-page__result"
        v-for="product in foundProducts"
        :key="product.name"
      >
        {{ product.name }}
        <img
          :src="require(`@/assets/img-sneakers/${product.img}`)"
          class="search-page__result-img"
        />
      </div>
    </div>
    <h3 class="search-page__not-found" v-else>Not found</h3> -->
  </AppWrapper>
</template>

<script>
import AppWrapper from "@/components/AppWrapper.vue";

export default {
  components: {
    AppWrapper,
  },
  name: "PageSearch",
};
</script>

<style lang="scss" scoped>
.search-page {
  height: 100vh;
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
  display: flex;
  justify-content: space-between;

  & + & {
    border-top: none;
  }
}
.search-page__result-img {
  border: 0.5px solid $secondary;
  border-radius: 10px;
  height: 50px;
  object-fit: fill;
  aspect-ratio: 125 / 135;
}
.search-page__not-found {
  color: $fc-gray;
  margin-top: 2rem;
  text-align: center;
}
</style>