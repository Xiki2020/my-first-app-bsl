<template>
  <AppWrapper style="padding-top: 0.95rem">
    <div class="description">
      Please fill E-mail & password to login your Shopy application account.
    </div>
    <form class="form">
      <InputEmail />
      <InputPassword style="margin-top: 1.25rem" />
      <InputCheckbox style="margin-top: 1.5rem" />
      <AppButton
        text="Sign In"
        style="margin-top: 3.125rem"
        @click="toCome"
        type="button"
        class="btn__translate"
      />
    </form>
    <FooterLogin style="margin: 3.75rem 0 3.5rem" />
  </AppWrapper>
</template>

<script>
import AppWrapper from "@/components/AppWrapper.vue";
import AppButton from "@/components/AppButton.vue";
import FooterLogin from "@/components/FooterLogin.vue";
import InputCheckbox from "@/components/AppInputs/InputCheckbox.vue";
import InputEmail from "@/components/AppInputs/InputEmail.vue";
import InputPassword from "@/components/AppInputs/InputPassword.vue";

export default {
  name: "SignInPage",
  components: {
    AppWrapper,
    AppButton,
    FooterLogin,
    InputCheckbox,
    InputEmail,
    InputPassword,
  },
  methods: {
    toCome() {
      window.sessionStorage.setItem("logIn", "User");
      this.$router.push({ name: "HomePage" });
      // console.log(document.forms[0][0].value);
    },
  },
};
</script>

<style lang="scss" scoped>
.description {
  color: $fc-gray;
  font-size: 0.8125rem;
  line-height: 1.85;
}

.form {
  margin-top: 3.125rem;
}
</style>