<template>
  <div class="new-password-page">
    <TitleHeader>
      Your new password must be different from previously used passwords.
    </TitleHeader>
    <form class="new-password-page__form">
      <InputPassword text="New password" />
      <InputPassword
        text="Confirm password"
        class="new-password-page__input-passwrod"
      />
      <Button
        text="Update"
        class="new-password-page__btn"
        @click.prevent="$router.push({ name: 'PasswordResetSubmitPage' })"
      />
    </form>
  </div>
</template>

<script>
import Button from "@/components/Button.vue"
import InputPassword from "@/components/FormComponents/InputPassword.vue"
import TitleHeader from "@/components/TitleHeader.vue"
export default {
  name: "NewPasswordPage",
  components: {
    Button,
    InputPassword,
    TitleHeader,
  },
}
</script>

<style lang="scss" scoped>
.new-password-page {
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
}
.new-password-page__form {
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  margin-top: 3.25rem;
}
.new-password-page__input-passwrod {
  margin: 1.25rem 0 3.25rem;
}
.new-password-page__btn {
  margin-top: auto;
}
</style>