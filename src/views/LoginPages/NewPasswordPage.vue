<template>
  <div class="container">
    <div class="description">
      Your new password must be different from previously used passwords.
    </div>
    <form class="form">
      <InputPassword text="new password" />
      <InputPassword text="confirm password" style="margin-top: 20px" />
      <div class="container-btn">
        <BigBtn
          text="Update"
          @click="$router.push({ name: 'PasswordResetSubmitPage' })"
          type="button"
        />
      </div>
    </form>
  </div>
</template>

<script>
import BigBtn from "@/components/AppButton/BigBtn.vue";
import InputPassword from "@/components/AppInputs/InputPassword.vue";
export default {
  name: "NewPasswordPage",
  components: {
    BigBtn,
    InputPassword,
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 15px;
}

.container-btn {
  bottom: 7vh;
  left: 50%;
  margin: 0 auto;
  position: absolute;
  transform: translateX(-50%);
  width: 80%;
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