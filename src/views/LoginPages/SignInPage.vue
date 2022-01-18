<template>
  <AppWrapper style="padding-top: 0.95rem">
    <div class="description">
      Please fill E-mail & password to login your Shopy application account.
    </div>
    <form class="form">
      <InputEmail />
      <InputPassword style="margin-top: 1.25rem" />
      <div class="signin-page__actions">
        <CustomCheckbox title="Запомнить меня" />
        <a
          class="signin-page__forgot"
          @click.prevent="$router.push({ name: 'ForgotPasswordPage' })"
          href="#"
        >Забыл пароль</a>
      </div>
      <AppButton
        text="Sign In"
        style="margin-top: 3.125rem"
        @click="toCome"
        type="button"
      />
    </form>
    <FooterLogin style="margin: 3.75rem 0 3.5rem" />
  </AppWrapper>
</template>

<script>
import AppWrapper from "@/components/AppWrapper.vue";
import AppButton from "@/components/AppButton.vue";
import FooterLogin from "@/components/FooterLogin.vue";
import CustomCheckbox from "@/components/FormComponents/CustomCheckbox.vue";
import InputEmail from "@/components/FormComponents/InputEmail.vue";
import InputPassword from "@/components/FormComponents/InputPassword.vue";

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
    toCome() {
      window.localStorage.setItem("logIn", "user");
      this.$router.push({ name: "HomePage" });
    },
  },
};
</script>

<style lang="scss" scoped>
.signin-page__actions {
  display: flex;
  align-items: center;
  margin-top: 1rem;
}

.signin-page__forgot {
  margin-left: auto;
}

.description {
  color: $fc-gray;
  font-size: 0.8125rem;
  line-height: 1.85;
}

.form {
  margin-top: 3.125rem;
}
</style>