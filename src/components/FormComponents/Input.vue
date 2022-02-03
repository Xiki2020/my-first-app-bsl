<template>
  <div class="input">
    <label
      :for="uuid"
      class="input__label"
    >{{ modelInput.text }}</label>
    <input
      :id="uuid"
      :type="modelInput.type"
      :placeholder="modelInput.placeholder"
      class="input__input"
      :name="`input__${modelInput.type}`"
      required
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script>
import { getUniqId } from "@/utils/common"
export default {
  name: "InputName",

  props: {
	  modelInput: {
		  type: Object,
		  reqired: true,
		  default: () => {
			  return {
				  placeholder: 'johnd',
				  required: true,
				  text: 'Name',
				  type: 'text',
			  }
		  }
	  },

	  modelValue: {
		  type: String,
		  reqired: true,
		  default: () => "",
	  }
  },

  emits: ['update:modelValue'],

  computed: {
    uuid() {
      return getUniqId()
    },
  },
}
</script>

<style lang="scss" scoped>
.input__label,
.input__input {
  display: block;
  color: $fc-gray;
  font-weight: 500;
  transition: $transition-base;
  width: 100%;
}
.input__input {
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