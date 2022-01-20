<template>
  <AppWrapper class="search-page">
    <div class="search-page__nav">
      <div class="search-page__name-nav">Recent searches</div>
      <AppButton
        class="search-page__btn-clear"
        text="Clear all"
        variant="gray"
        size="small"
      />
    </div>
    <div class="search-page__results">
      <div
        class="search-page__result"
        v-for="product in getNewProducts"
        :key="product.name"
      >
        {{ product.name }}
      </div>
    </div>
  </AppWrapper>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import AppWrapper from "@/components/AppWrapper.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    AppWrapper,
    AppButton,
  },
  name: "SearchPage",
  computed: mapGetters(["getNewProducts"]),
};
</script>

<style lang="scss" scoped>
.search-page__nav {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-top: 10rem;
}
.search-page__name-nav {
  color: $fc-gray;
  font-weight: bold;
  font-size: 1.125rem;
}
.search-page__btn-clear {
  background-color: #f7f8f9;
  border: 0.5px solid $secondary;
  color: $fc-gray;
}
.search-page__results {
  color: $fc-gray;
  font-weight: 600;
  line-height: 60px;
  padding-top: 0.625rem;
}

.search-page__result {
  border-top: 1px solid $secondary;
  border-bottom: 1px solid $secondary;
}
.search-page__result + .search-page__result {
  border-top: none;
}
</style>