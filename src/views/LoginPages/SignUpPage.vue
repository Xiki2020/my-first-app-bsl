<template>
  <div class="sign-up-page">
    <form class="sign-up-page__form">
      <InputName />
      <InputEmail class="sign-up-page__input-mail" />
      <InputPassword class="sign-up-page__input-password" />
      <Button class="sign-up-page__btn" text="Sign Up" type="button" />
    </form>
    <LoginWith
      class="sign-up-page__footer"
      title="Sign In"
      toRouteName="SignInPage"
    />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import InputEmail from "@/components/FormComponents/InputEmail.vue";
import InputName from "@/components/FormComponents/InputName.vue";
import InputPassword from "@/components/FormComponents/InputPassword.vue";
import LoginWith from "@/components/LoginWith.vue";

export default {
  name: "SignUpPage",
  components: {
    Button,
    InputEmail,
    InputName,
    InputPassword,
    LoginWith,
  },
};
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