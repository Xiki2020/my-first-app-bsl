<template>
  <div class="recovery-code-page">
    <TitleHeader
      >The recovery code was sent to your mobile. Code expiration time is 120s.
      Please enter the code:
    </TitleHeader>
    <ConfirmationCode class="recovery-code-page__form">
      <Button
        text="Send again"
        @click.prevent="$router.push({ name: 'NewPasswordPage' })"
        name="component_form_pin"
        class="recovery-code-page__btn"
      />
    </ConfirmationCode>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import ConfirmationCode from "@/components/ConfirmationCode.vue";
import TitleHeader from "@/components/TitleHeader.vue";

export default {
  name: "RecoveryCodePage",
  components: {
    Button,
    ConfirmationCode,
    TitleHeader,
  },
};
</script>

<style lang="scss" scoped>
.recovery-code-page {
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
}
.recovery-code-page__form {
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 3.25rem;
}
.recovery-code-page__btn {
  margin-top: 3.25rem;
}
</style>