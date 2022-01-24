<template>
  <div class="search-bar">
    <input
      type="text"
      class="search-bar__input"
      :id="uuid"
      placeholder="Search"
      v-model="value"
      @input="handValue"
    />
  </div>
</template>
<script>
import { getUniqId } from "@/utils/common";
export default {
  name: "SearchBar",
  computed: {
    uuid() {
      return getUniqId();
    },
  },

  data() {
    return {
      value: "",
    };
  },

  methods: {
    handValue() {
      this.$emit("handValue", this.value);
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
  transition: all 2s linear;
  width: 100%;
}

.search-bar__input::placeholder {
  color: $secondary;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
}
</style>
