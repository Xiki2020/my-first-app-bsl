<template>
  <AppWrapper class="recovery-code-page">
    <div class="recovery-code-page__description">
      The recovery code was sent to your mobile. Code expiration time is 120s.
      Please enter the code:
    </div>
    <CustomFormPin class="recovery-code-page__form">
      <AppButton
        text="Send again"
        @click="toCome"
        type="button"
        name="component_form_pin"
        class="recovery-code-page__btn"
      />
    </CustomFormPin>
  </AppWrapper>
</template>

<script>
import AppWrapper from "@/components/AppWrapper.vue";
import AppButton from "@/components/AppButton.vue";
import CustomFormPin from "@/components/CustomFormPin.vue";

export default {
  name: "RecoveryCodePage",
  components: {
    AppWrapper,
    AppButton,
    CustomFormPin,
  },
  methods: {
    toCome() {
      this.$router.push({ name: "NewPasswordPage" });
    },
  },
};
</script>

<style lang="scss" scoped>
.recovery-code-page {
  padding-top: 0.95rem;
}
.recovery-code-page__description {
  color: $fc-gray;
  font-size: 0.8125rem;
  line-height: 1.85;
}

.recovery-code-page__form {
  display: flex;
  flex-direction: column;
  height: 540px;
  justify-content: space-between;
  margin-top: 3.25rem;
}
</style>