<template>
  <AppWrapper class="sign-in-page">
    <div class="sign-in-page__description">
      Please fill E-mail & password to login your Shopy application account.
    </div>
    <form class="sign-in-page__form">
      <InputEmail />
      <InputPassword class="sign-in-page__input-password" />
      <div class="sign-in-page__actions">
        <CustomCheckbox title="Запомнить меня" />
        <router-link
          class="sign-in-page__link-forgot"
          :to="{ name: 'ForgotPasswordPage' }"
          >Forgot password?</router-link
        >
      </div>
      <AppButton
        text="Sign In"
        class="sign-in-page__btn"
        @click="toCome"
        type="button"
      />
    </form>
    <FooterLogin
      class="sign-in-page__footer"
      title="Sign Up"
      toRouteName="SignUpPage"
    />
  </AppWrapper>
</template>

<script>
import AppWrapper from "@/components/AppWrapper.vue";
import AppButton from "@/components/AppButton.vue";
import FooterLogin from "@/components/FooterLogin.vue";
import CustomCheckbox from "@/components/FormComponents/CustomCheckbox.vue";
import InputEmail from "@/components/FormComponents/InputEmail.vue";
import InputPassword from "@/components/FormComponents/InputPassword.vue";

import { mapActions } from "vuex";

export default {
  name: "SignInPage",
  components: {
    AppWrapper,
    AppButton,
    FooterLogin,
    CustomCheckbox,
    InputEmail,
    InputPassword,
  },
  methods: {
    ...mapActions(["changeRole"]),
    toCome() {
      this.changeRole("user");
      this.$router.push({ name: "HomePage" });
    },
  },
};
</script>

<style lang="scss" scoped>
.sign-in-page {
  padding-top: 1.3rem;
}
.sign-in-page__description {
  color: $fc-gray;
  font-size: 0.8125rem;
  line-height: 1.85;
}
.sign-in-page__form {
  margin-top: 3.125rem;
}
.sign-in-page__input-password {
  margin-top: 1.25rem;
}
.sign-in-page__actions {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}
.sign-in-page__link-forgot {
  color: $fc-gray;
  font-weight: 500;
  margin-left: auto;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    transition: $transition-base;
  }
}
.sign-in-page__btn {
  margin-top: 2.8rem;
}
.sign-in-page__footer {
  margin-top: 3.125rem;
}
</style>