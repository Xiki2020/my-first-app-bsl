<template>
  <AppWrapper style="padding-top: 60px">
    <form class="form">
      <InputName />
      <InputEmail style="margin-top: 20px" />
      <InputPassword style="margin-top: 20px" />
      <BigBtn text="Sign Up" style="margin-top: 45px" type="button" />
    </form>
    <FooterLogin style="margin: 60px 0 55px" title="Sign In" />
  </AppWrapper>
</template>

<script>
import AppWrapper from "@/components/AppWrapper.vue";
import BigBtn from "@/components/AppButton/BigBtn.vue";
import FooterLogin from "@/components/FooterLogin.vue";
import InputEmail from "@/components/AppInputs/InputEmail.vue";
import InputName from "@/components/AppInputs/InputName.vue";
import InputPassword from "@/components/AppInputs/InputPassword.vue";

export default {
  name: "SignUpPage",
  components: {
    AppWrapper,
    BigBtn,
    FooterLogin,
    InputEmail,
    InputName,
    InputPassword,
  },
};
</script>

<style lang="scss" scoped>
</style>