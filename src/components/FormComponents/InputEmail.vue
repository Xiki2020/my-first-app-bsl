<template>
  <div class="input-email">
    <label
      :for="uuid"
      class="input-email__label"
    >E-mail</label>
    <input
      :id="uuid"
      type="email"
      placeholder="example@gmail.com"
      class="input-email__input"
      name="email"
      required
    >
  </div>
</template>

<script>
import { getUniqId } from "@/utils/common"
export default {
  name: "InputEmail",
  computed: {
    uuid() {
      return getUniqId()
    },
  },
}
</script>

<style lang="scss" scoped>
.input-email__label,
.input-email__input {
  display: block;
  color: $fc-gray;
  font-weight: 500;
  transition: $transition-base;
  width: 100%;
}
.input-email__input {
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