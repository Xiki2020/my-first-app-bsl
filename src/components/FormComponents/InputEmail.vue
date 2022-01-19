<template>
  <div class="input-email">
    <label :for="uuid" class="input-email__label">E-mail</label>
    <input
      type="email"
      :id="uuid"
      placeholder="example@gmail.com"
      class="input-email__input"
    />
  </div>
</template>

<script>
import { getUniqId } from "@/utils/common";
export default {
  name: "InputEmail",
  computed: {
    uuid() {
      return getUniqId();
    },
  },
};
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
  height: 60px;
  margin-top: 10px;
  outline: none;
  padding: 20px 17px;

  &:hover {
    border-color: black;
  }

  &::placeholder {
    color: $secondary;
    font-size: $font-size-base;
  }
}
</style>