<template>
  <div class="custom-checkbox">
    <input
      class="custom-checkbox__input"
      type="checkbox"
      :id="uuid"
    />
    <label
      class="custom-checkbox__label"
      :for="uuid"
    >{{ title }}</label>
  </div>
</template>

<script>
import { getUniqId } from '@/utils/common'
export default {
  name: "CustomCheckbox",
  props: {
    title: {
      title: String,
      required: () => true
    }
  },

  computed: {
    uuid () {
      return getUniqId()
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-checkbox {
  align-items: center;
  display: flex;

  label {
    display: flex;
  }

  label::before {
    background-color: #f7f8f9;
    border: 0.5px solid $secondary;
    border-radius: 4px;
    content: "";
    cursor: pointer;
    display: inline-block;
    height: 22px;
    transition: border 0.1s linear;
    width: 22px;
  }

  label:hover::before {
    border-color: black;
  }

  input:checked + label::before {
    background-image: url("icons/check.jpg");
    background-size: cover;
    border-color: #00d455;
  }
}

.custom-checkbox__btn-forg-pass {
  color: $fc-gray;
  cursor: pointer;
  font-weight: 500;
}

.custom-checkbox__input {
  display: none;
}
</style>