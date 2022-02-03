<template>
  <Form>
    <Field
      name="email"
      type="email"
      :rules="validateEmail"
      class="form__input"
    />
    <ErrorMessage name="email" />
    <Input />
    <Button>Sign up</Button>
  </Form>
</template>

<script>
import Button from "@/components/Button.vue"
import Input from "@/components/FormComponents/Input.vue"

export default {
  name: "Temp",

  components: {
		Button,
		Input,
  },

  methods: {
   //  onSubmit(values) {
   //    console.log(JSON.stringify(values, null, 2))
   //  },

    validateEmail(value) {
      if (!value) {
        return 'This field is required'
      }

      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

      if (!regex.test(value)) {
        return 'This field must be a valid email'
      }

      return true
    },
  },
}
</script>
<style lang="scss" scoped>
.form__input{
  display: block;
  color: $fc-gray;
  font-weight: 500;
  transition: $transition-base;
  width: 100%;

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