<template>
  <AppWrapper class="sign-up-page">
    <form class="sign-up-page__form">
      <InputName />
      <InputEmail class="sign-up-page__input-mail" />
      <InputPassword class="sign-up-page__input-password" />
      <AppButton class="sign-up-page__btn" text="Sign Up" type="button" />
    </form>
    <FooterLogin
      class="sign-up-page__footer"
      title="Sign In"
      toRouteName="SignInPage"
    />
  </AppWrapper>
</template>

<script>
import AppWrapper from "@/components/AppWrapper.vue";
import AppButton from "@/components/AppButton.vue";
import FooterLogin from "@/components/FooterLogin.vue";
import InputEmail from "@/components/FormComponents/InputEmail.vue";
import InputName from "@/components/FormComponents/InputName.vue";
import InputPassword from "@/components/FormComponents/InputPassword.vue";

export default {
  name: "SignUpPage",
  components: {
    AppWrapper,
    AppButton,
    FooterLogin,
    InputEmail,
    InputName,
    InputPassword,
  },
};
</script>

<style lang="scss" scoped>
.sign-up-page {
  padding-top: 3.25rem;
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