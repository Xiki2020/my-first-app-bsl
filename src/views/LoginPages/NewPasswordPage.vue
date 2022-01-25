<template>
  <AppWrapper class="new-password-page">
    <div class="new-password-page__title">
      Your new password must be different from previously used passwords.
    </div>
    <form class="new-password-page__form">
      <InputPassword text="New password" />
      <InputPassword
        text="Confirm password"
        class="new-password-page__input-passwrod"
      />
      <div class="new-password-page__btn">
        <AppButton
          text="Update"
          @click="$router.push({ name: 'PasswordResetSubmitPage' })"
          type="button"
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
.new-password-page {
  padding-top: 15px;
}
.new-password-page__title {
  color: $fc-gray;
  font-size: 0.8125rem;
  line-height: 1.8;
  word-wrap: break-word;
}
.new-password-page__form {
  display: flex;
  flex-direction: column;
  height: 565px;
  margin-top: 3.25rem;
}
.new-password-page__input-passwrod {
  margin-top: 1.25rem;
}
.new-password-page__btn {
  margin-top: auto;
}
</style>