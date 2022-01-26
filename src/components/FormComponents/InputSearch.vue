<template>
  <input
    type="text"
    class="input-search"
    placeholder="Search"
    v-model="localValue"
    @input="handInput"
  />
</template>
<script>
export default {
  name: "SearchBar",

  props: {
    value: {
      type: String,
    },
  },

  data() {
    return {
      localValue: this.value,
    };
  },

  methods: {
    handInput() {
      this.$emit("handInput", this.localValue);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-search {
  background-color: #f7f8f9;
  border: 0.5px solid $secondary;
  border-radius: 14px;
  font-weight: 500;
  line-height: 1.25;
  height: 60px;
  outline: none;
  padding-left: 1rem;
  transition: $transition-base;
  width: 100%;

  &:hover,
  &:focus {
    border-color: black;
  }
}

.input-search::placeholder {
  color: $secondary;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
}
</style>
