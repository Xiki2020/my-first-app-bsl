<template>
  <div class="container">
    <HeaderApp style="padding: 60px 0 55px" />
    <form class="form">
      <InputName />
      <InputEmail style="margin-top: 20px" />
      <InputPassword style="margin-top: 20px" />
      <BigBtn text="Sign Up" style="margin-top: 45px" />
    </form>
    <FooterLogin style="margin-top: 60px" text="Sign In" />
  </div>
</template>

<script>
import BigBtn from "@/components/AppButton/BigBtn.vue";
import FooterLogin from "@/components/FooterLogin.vue";
import HeaderApp from "@/components/HeaderApp.vue";
import InputEmail from "@/components/AppInputs/InputEmail.vue";
import InputName from "@/components/AppInputs/InputName.vue";
import InputPassword from "@/components/AppInputs/InputPassword.vue";

export default {
  name: "SignUpPage",
  components: {
    BigBtn,
    FooterLogin,
    HeaderApp,
    InputEmail,
    InputName,
    InputPassword,
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 0 9.6%;
}
</style>