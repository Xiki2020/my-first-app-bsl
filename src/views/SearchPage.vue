<template>
  <AppWrapper class="search-page">
    <div class="search-page__nav">
      <div class="search-page__name-nav">Search results:</div>
      <!-- <AppButton
        class="search-page__btn-clear"
        text="Clear all"
        variant="gray"
        size="small"
      /> -->
    </div>
    <div class="search-page__results" v-if="foundProducts.length > 0">
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
    <h3 class="search-page__not-found" v-else>Not found</h3>
  </AppWrapper>
</template>

<script>
// import AppButton from "@/components/AppButton.vue";
import AppWrapper from "@/components/AppWrapper.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    AppWrapper,
    //  AppButton,
  },
  name: "SearchPage",
  computed: mapGetters(["getFiltrProducts"]),
  data() {
    return {
      foundProducts: [],
    };
  },
  methods: {
    findProduct() {
      let inputSearch = document.querySelector("input");
      this.foundProducts = this.getFiltrProducts(inputSearch.value);
      inputSearch.addEventListener("input", () => {
        this.foundProducts = this.getFiltrProducts(inputSearch.value);
      });
    },
  },
  created() {
    this.findProduct();
  },
};
</script>

<style lang="scss" scoped>
.search-page__nav {
  //   align-items: center;
  //   display: flex;
  //   justify-content: space-between;
  padding-top: 10rem;
}
.search-page__name-nav {
  color: $fc-gray;
  font-weight: bold;
  font-size: 1.125rem;
}
// .search-page__btn-clear {
//   background-color: #f7f8f9;
//   border: 0.5px solid $secondary;
//   color: $fc-gray;
// }
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