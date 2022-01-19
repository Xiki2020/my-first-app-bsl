<template>
  <div class="custom-checkbox">
    <input class="custom-checkbox__input" type="checkbox" :id="uuid" />
    <label class="custom-checkbox__label" :for="uuid">
      <div class="custom-checkbox__text">{{ title }}</div>
    </label>
  </div>
</template>

<script>
import { getUniqId } from "@/utils/common";
export default {
  name: "CustomCheckbox",
  props: {
    title: {
      title: String,
      required: () => true,
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
.custom-checkbox {
  align-items: center;
  display: flex;
}
.custom-checkbox__input {
  display: none;
}
.custom-checkbox__input:checked + .custom-checkbox__label::before {
  background-image: url("icons/check.jpg");
  background-size: cover;
  border-color: #00d455;
}
.custom-checkbox__label {
  cursor: pointer;
  display: flex;
}
.custom-checkbox__text {
  color: $fc-gray;
  font-weight: 500;
  line-height: 24px;
  padding-left: 0.5rem;
  text-decoration: none;
}
.custom-checkbox__label::before {
  background-color: #f7f8f9;
  border: 0.5px solid $secondary;
  border-radius: 4px;
  content: "";
  display: inline-block;
  height: 22px;
  transition: border 0.1s linear;
  width: 22px;
}
.custom-checkbox__label:hover::before {
  border-color: black;
}
</style>