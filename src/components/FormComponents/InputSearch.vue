<template>
  <input
    type="text"
    class="input-search"
    placeholder="Search"
    v-model="localValue"
  />
</template>
<script>
export default {
  name: "SearchBar",

  props: {
    value: {
      type: String,
      required: true,
      default: () => "",
    },
  },

  watch: {
    value(val) {
      this.localValue = val;
    },
    localValue(val) {
      this.$emit("handInput", val);
    },
  },

  data() {
    return {
      localValue: this.value,
    };
  },
};
</script>

<style lang="scss" scoped>
.input-search {
  background-color: $light-gray;
  border: 0.5px solid $secondary;
  border-radius: 14px;
  font-weight: 500;
  outline: none;
  padding: 1.3rem 1rem;
  transition: $transition-base;
  width: 100%;

  &:hover,
  &:focus {
    border-color: $fc-gray;
  }
}

.input-search::placeholder {
  color: $secondary;
  font-family: Montserrat;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.2;
}
</style>
