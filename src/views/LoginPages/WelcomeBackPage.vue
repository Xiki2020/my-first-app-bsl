<template>
  <div class="container">
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
  </div>
</template>

<script>
import BigBtn from "@/components/AppButton/BigBtn.vue";
import FooterLogin from "@/components/FooterLogin.vue";
import InputCheckbox from "@/components/AppInputs/InputCheckbox.vue";
import InputEmail from "@/components/AppInputs/InputEmail.vue";
import InputPassword from "@/components/AppInputs/InputPassword.vue";

export default {
  name: "WelcomeBackPage",
  components: {
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
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 15px;
}

.description {
  color: #3e4958;
  font-size: 13px;
  line-height: 24px;
}

.form {
  margin-top: 50px;
}
</style>