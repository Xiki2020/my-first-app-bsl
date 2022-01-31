<template>
  <div class="welcome-back-page">
    <TitleHeader>
      Please fill E-mail & password to login your Shopy application account.
    </TitleHeader>
    <form class="welcome-back-page__form">
      <InputEmail />
      <InputPassword class="welcome-back-page__input-password" />
      <div class="welcome-back-page__actions actions">
        <CustomCheckbox title="Запомнить меня" />
        <router-link
          class="actions__link-forgot"
          :to="{ name: 'ForgotPasswordPage' }"
        >
          Forgot password?
        </router-link>
      </div>
      <Button
        text="Sign In"
        class="welcome-back-page__btn"
        @click.prevent="toCome"
      />
    </form>
    <LoginWith
      class="welcome-back-page__footer"
      title="Sign Up"
      to-route-name="SignUpPage"
    />
  </div>
</template>

<script>
import Button from "@/components/Button.vue"
import CustomCheckbox from "@/components/FormComponents/CustomCheckbox.vue"
import InputEmail from "@/components/FormComponents/InputEmail.vue"
import InputPassword from "@/components/FormComponents/InputPassword.vue"
import LoginWith from "@/components/LoginWith.vue"
import TitleHeader from "@/components/TitleHeader.vue"

import { mapActions } from "vuex"

export default {
  name: "WelcomeBackPage",
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
      this.changeRole("user")
      this.$router.push({ name: "HomePage" })
    },
  },
}
</script>

<style lang="scss" scoped>
.welcome-back-page {
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
}
.welcome-back-page__form {
  margin-top: auto;
}
.welcome-back-page__input-password {
  margin-top: 1.25rem;
}
.welcome-back-page__actions {
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
.welcome-back-page__btn {
  margin-top: 2.8rem;
}
.welcome-back-page__footer {
  margin-top: 3.125rem;
}
</style>