<template>
  <AppWrapper style="padding-top: 15px">
    <div class="description">
      Please fill E-mail & password to login your Shopy application account.
    </div>
    <form class="form">
      <InputEmail />
      <InputPassword style="margin-top: 20px" />
      <CustomCheckbox style="margin-top: 25px" />
      <AppButton
        text="Sign In"
        style="margin-top: 50px"
        @click="toCome"
        type="button"
      />
    </form>
    <FooterLogin style="margin: 60px 0 55px" />
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
    toCome() {
      window.localStorage.setItem("logIn", "user");
      this.$router.push({ name: "HomePage" });
    },
  },
};
</script>

<style lang="scss" scoped>
.description {
  color: #3e4958;
  font-size: 13px;
  line-height: 24px;
}

.form {
  margin-top: 50px;
}
</style>