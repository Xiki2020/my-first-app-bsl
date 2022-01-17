<template>
  <AppWrapper style="padding-top: 15px">
    <div class="description">
      Your new password must be different from previously used passwords.
    </div>
    <form class="form">
      <InputPassword text="new password" />
      <InputPassword text="confirm password" style="margin-top: 20px" />
      <div class="btn-update">
        <AppButton
          text="Update"
          @click="$router.push({ name: 'PasswordResetSubmitPage' })"
          type="button"
          class="btn__translate"
        />
      </div>
    </form>
  </AppWrapper>
</template>

<script>
import AppWrapper from "@/components/AppWrapper.vue";
import AppButton from "@/components/AppButton.vue";
import InputPassword from "@/components/FormComponents/InputPassword.vue";
export default {
  name: "NewPasswordPage",
  components: {
    AppWrapper,
    AppButton,
    InputPassword,
  },
};
</script>

<style lang="scss" scoped>
.btn-update {
  bottom: 3.4375rem;
  left: 50%;
  margin: 0 auto;
  position: absolute;
  transform: translateX(-50%);
  width: calc(100% - 4.5rem);
}

.description {
  color: #3e4958;
  font-size: 13px;
  line-height: 24px;
}

.form {
  margin-top: 50px;
  min-height: 325px;
}
</style>