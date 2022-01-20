<template>
  <div class="search-bar">
    <input
      type="text"
      class="search-bar__input"
      :id="uuid"
      v-model="valueSearch"
      @input="isRoute"
    />
    <label :for="uuid" class="search-bar__placeholder">
      <img src="@/assets/icons/icon_search_input.png" />
      <div class="search-bar__text-placeholder">Search</div>
    </label>
  </div>
</template>
<script>
import { getUniqId } from "@/utils/common";
export default {
  name: "SearchBar",
  data() {
    return {
      valueSearch: "",
    };
  },
  methods: {
    isRoute() {
      if (this.valueSearch.length >= 3) {
        this.$router.push({ name: "SearchPage" });
      }
    },
  },
  computed: {
    uuid() {
      return getUniqId();
    },
  },
};
</script>

<style lang="scss" scoped>
.search-bar {
  align-items: center;
  display: flex;
  height: 60px;
}

.search-bar__input {
  background-color: #f7f8f9;
  border: none;
  border-radius: 14px;
  font-weight: 500;
  line-height: 1.25;
  height: 100%;
  outline: none;
  padding-left: 1rem;
  width: 100%;

  &:focus ~ .search-bar__placeholder {
    display: none;
  }
}

.search-bar__placeholder {
  cursor: text;
  display: flex;
  margin-left: 1rem;
  position: absolute;

  img {
    height: 20px;
    width: 20px;
  }
}
.search-bar__text-placeholder {
  color: $secondary;
  font-weight: 500;
  line-height: 1.25;
  margin-left: 0.5rem;
}
</style>
