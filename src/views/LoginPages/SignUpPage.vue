<template>
  <AppWrapper style="padding-top: 3.75rem">
    <form class="form">
      <InputName />
      <InputEmail style="margin-top: 1.25rem" />
      <InputPassword style="margin-top: 1.25rem" />
      <AppButton
        text="Sign Up"
        style="margin-top: 2.8rem"
        type="button"
      />
    </form>
    <FooterLogin style="margin: 3.75rem 0 3.5rem" title="Sign In!!!" />
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
</style>