<template>
  <div class="search-bar">
    <input
      type="text"
      class="search-bar__input"
      :id="uuid"
      v-model="valueSearch"
      @input="isTransition"
    />
    <label :for="uuid" class="search-bar__placeholder">
      <img src="@/assets/icons/icon_search_input.png" />
      <div class="search-bar__text-placeholder">Search</div>
    </label>
  </div>
</template>
<script>
import { getUniqId } from "@/utils/common";

import { mapActions, mapGetters } from "vuex";
export default {
  name: "SearchBar",
  data() {
    return {
      valueSearch: "",
    };
  },
  methods: {
    ...mapActions(["changeValueSearch"]),
    isTransition() {
      if (this.valueSearch.length >= 3) {
        this.$router.push({ name: "SearchPage" });
      }
      this.changeValueSearch(this.valueSearch);
    },
    created() {
      this.valueSearch = this.getValueSearch;
      console.log(document.querySelector("input"));
    },
  },
  computed: {
    ...mapGetters(["getValueSearch"]),
    uuid() {
      return getUniqId();
    },
  },
  created() {
    this.created();
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
  margin-right: 5px;
  height: 100%;
  outline: none;
  padding-left: 18px;
  width: 100%;

  &:focus ~ .search-bar__placeholder {
    display: none;
  }
}

.search-bar__placeholder {
  cursor: text;
  display: flex;
  margin-left: 18px;
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
  margin-left: 6.2px;
}
</style>
