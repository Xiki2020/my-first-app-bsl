<template>
  <AppWrapper class="search-page">
    <div class="search-page__header">
      <AppButton @click="$router.go(-1)" class="search-page__btn-back">
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.82828 8.29289L18.4141 8.29289L18.4141 10.2929L3.82828 10.2929L10.1212 16.5858L8.70696 18L-0.000149919 9.29289L8.70696 0.585786L10.1212 2L3.82828 8.29289Z"
            fill="#3E4958"
          />
        </svg>
      </AppButton>
      <InputSearch class="search-page__input" />
    </div>
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
import InputSearch from "@/components/FormComponents/InputSearch.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    AppWrapper,
    AppButton,
    InputSearch,
  },
  name: "SearchPage",
  computed: mapGetters(["getNewProducts"]),
};
</script>

<style lang="scss" scoped>
.search-page__header {
  display: flex;
  justify-content: space-between;
  padding-top: 3.3rem;
}
.search-page__btn-back {
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
.search-page__input {
  width: 88%;
}
.search-page__nav {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
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