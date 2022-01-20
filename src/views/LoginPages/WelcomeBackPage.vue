<template>
  <AppWrapper class="welcome-back-page">
    <div class="welcome-back-page__description">
      Please fill E-mail & password to login your Shopy application account.
    </div>
    <form class="welcome-back-page__form">
      <InputEmail />
      <InputPassword class="welcome-back-page__input-password" />
      <div class="welcome-back-page__actions">
        <CustomCheckbox title="Запомнить меня" />
        <router-link
          class="welcome-back-page__link-forgot"
          :to="{ name: 'ForgotPasswordPage' }"
          >Forgot password?</router-link
        >
      </div>
      <AppButton
        text="Sign In"
        class="welcome-back-page__btn"
        @click="toCome"
        type="button"
      />
    </form>
    <FooterLogin
      class="welcome-back-page__footer"
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
  name: "WelcomeBackPage",
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
.welcome-back-page {
  padding-top: 1.3rem;
}
.welcome-back-page__description {
  color: $fc-gray;
  font-size: 0.8125rem;
  line-height: 1.85;
}
.welcome-back-page__form {
  margin-top: 3.125rem;
}
.welcome-back-page__input-password {
  margin-top: 1.25rem;
}

.welcome-back-page__actions {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.welcome-back-page__link-forgot {
  color: $fc-gray;
  font-weight: 500;
  margin-left: auto;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    transition: $transition-base;
  }
}
.welcome-back-page__btn {
  margin-top: 2.8rem;
}
.welcome-back-page__footer {
  margin-top: 3.125rem;
}
</style>