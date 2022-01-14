<template>
  <AppWrapper style="padding-top: 15px">
    <div class="description">
      Please fill E-mail & password to login your Shopy application account.
    </div>
    <form class="form">
      <InputEmail />
      <InputPassword style="margin-top: 20px" />
      <InputCheckbox style="margin-top: 25px" />
      <BigBtn
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
import BigBtn from "@/components/AppButton/BigBtn.vue";
import FooterLogin from "@/components/FooterLogin.vue";
import InputCheckbox from "@/components/AppInputs/InputCheckbox.vue";
import InputEmail from "@/components/AppInputs/InputEmail.vue";
import InputPassword from "@/components/AppInputs/InputPassword.vue";

export default {
  name: "SignInPage",
  components: {
    AppWrapper,
    BigBtn,
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
  color: #3e4958;
  font-size: 13px;
  line-height: 24px;
}

.form {
  margin-top: 50px;
}
</style>