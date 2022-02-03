<template>
  <div class="sign-up-page">
    <form class="sign-up-page__form">
      <Input />
      <Input
        class="sign-up-page__input-mail"
        :model-input="{
          placeholder: 'example@gmail.com',
          required: true,
          text: 'E-mail',
          type: 'email',
        }"
      />
      <Input
        v-model="password"
        class="sign-up-page__input-password"
        :model-input="{
          placeholder: 'm38rmF$',
          required: true,
          text: 'Password',
          type: 'password',
        }"
      />
      <Button
        class="sign-up-page__btn"
        text="Sign Up"
        type="button"
        @click="$router.push({ name: 'TempPage' })"
      />
    </form>
    <LoginWith
      class="sign-up-page__footer"
      title="Sign In"
      to-route-name="SignInPage"
    />
  </div>
</template>

<script>
import Button from "@/components/Button.vue"
import Input from "@/components/FormComponents/Input.vue"
import LoginWith from "@/components/LoginWith.vue"


export default {
  name: "SignUpPage",

  components: {
    Button,
    Input,
    LoginWith,
  },

  data() {
	  return {
		  password: ''
	  }
  },
}
</script>

<style lang="scss" scoped>
.sign-up-page {
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
}
.sign-up-page__form {
  margin-top: auto;
}
.sign-up-page__input-mail {
  margin-top: 1.25rem;
}
.sign-up-page__input-password {
  margin-top: 1.25rem;
}
.sign-up-page__btn {
  margin-top: 2.8rem;
}
.sign-up-page__footer {
  margin-top: 3.125rem;
}
</style>