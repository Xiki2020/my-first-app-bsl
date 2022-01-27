<template>
  <div class="sign-in-page">
    <TitleHeader
      >Please fill E-mail & password to login your Shopy application account.
    </TitleHeader>
    <form class="sign-in-page__form">
      <InputEmail />
      <InputPassword class="sign-in-page__input-password" />
      <div class="sign-in-page__actions actions">
        <CustomCheckbox title="Запомнить меня" />
        <router-link
          class="actions__link-forgot"
          :to="{ name: 'ForgotPasswordPage' }"
          >Forgot password?</router-link
        >
      </div>
      <Button
        text="Sign In"
        class="sign-in-page__btn"
        @click.prevent="toCome"
      />
    </form>
    <LoginWith
      class="sign-in-page__footer"
      title="Sign Up"
      toRouteName="SignUpPage"
    />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import CustomCheckbox from "@/components/FormComponents/CustomCheckbox.vue";
import InputEmail from "@/components/FormComponents/InputEmail.vue";
import InputPassword from "@/components/FormComponents/InputPassword.vue";
import LoginWith from "@/components/LoginWith.vue";
import TitleHeader from "@/components/TitleHeader.vue";

import { mapActions } from "vuex";

export default {
  name: "SignInPage",
  components: {
    Button,
    CustomCheckbox,
    InputEmail,
    InputPassword,
    LoginWith,
    TitleHeader,
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
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
}
.sign-in-page__form {
  margin-top: auto;
}
.sign-in-page__input-password {
  margin-top: 1.25rem;
}
.sign-in-page__actions {
  margin-top: 1rem;
}
.actions {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.actions__link-forgot {
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