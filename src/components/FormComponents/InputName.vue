<template>
  <div class="input-name">
    <label
      :for="uuid"
      class="input-name__label"
    >Name</label>
    <input
      :id="uuid"
      type="name"
      placeholder="John Doe"
      class="input-name__input"
    >
  </div>
</template>

<script>
import { getUniqId } from "@/utils/common"
export default {
  name: "InputName",
  computed: {
    uuid() {
      return getUniqId()
    },
  },
}
</script>

<style lang="scss" scoped>
.input-name__label,
.input-name__input {
  display: block;
  color: $fc-gray;
  font-weight: 500;
  transition: $transition-base;
  width: 100%;
}
.input-name__input {
  background-color: #f7f8f9;
  border: 0.5px solid $secondary;
  border-radius: 14px;
  margin-top: 0.625rem;
  outline: none;
  padding: 1.25rem 1rem;

  &:hover {
    border-color: $fc-gray;
  }

  &::placeholder {
    color: $secondary;
    font-size: $font-size-base;
  }
}
</style>