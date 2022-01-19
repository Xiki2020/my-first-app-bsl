<template>
  <AppWrapper class="recovery-code-page">
    <div class="recovery-code-page__description">
      The recovery code was sent to your mobile. Code expiration time is 120s.
      Please enter the code:
    </div>
    <form class="recovery-code-page__form">
      <div class="recovery-code-page__pin">
        <input
          type="tel"
          :id="uuid"
          v-model="pinValue"
          @input="validationPin"
          class="recovery-code-page__pin-input"
        />
        <div class="recovery-code-page__pin-labels">
          <label
            :for="uuid"
            v-for="n in 4"
            :key="n"
            class="recovery-code-page__pin-label"
          >
            <div>
              {{ pinValue[n - 1] }}
            </div>
          </label>
        </div>
      </div>
      <div class="recovery-code-page__btn">
        <AppButton text="Send again" @click="isValidationPin" type="button" />
      </div>
    </form>
  </AppWrapper>
</template>

<script>
import AppWrapper from "@/components/AppWrapper.vue";
import AppButton from "@/components/AppButton.vue";

import { getUniqId } from "@/utils/common";
export default {
  name: "RecoveryCodePage",
  components: {
    AppWrapper,
    AppButton,
  },
  data() {
    return {
      pinValue: "",
      correctPin: "1111",
    };
  },
  methods: {
    validationPin() {
      if (this.pinValue === this.correctPin) {
        this.$router.push({ name: "NewPasswordPage" });
      }
      if (this.pinValue.length > 4) {
        this.pinValue = this.pinValue.substring(0, 4);
      }
      if (!/[0-9]$/.exec(this.pinValue)) {
        this.pinValue = this.pinValue.substring(0, this.pinValue.length - 1);
      }
    },
    isValidationPin() {
      if (this.pinValue === this.correctPin) {
        this.$router.push({ name: "NewPasswordPage" });
      }
    },
  },
  computed: {
    uuid() {
      return getUniqId();
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
  min-height: 200px;
}

.recovery-code-page__pin {
  display: flex;
  justify-content: space-between;
  margin-top: 55px;
  position: relative;
}
.recovery-code-page__pin-input {
  opacity: 0;

  &:focus ~ .recovery-code-page__pin-labels {
    .recovery-code-page__pin-label {
      border-color: #000000;
    }
  }
}
.recovery-code-page__pin-labels {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
}
.recovery-code-page__pin-label {
  align-items: center;
  background: #f7f8f9;
  border: 0.5px solid $secondary;
  border-radius: 14px;
  color: $fc-gray;
  cursor: pointer;
  display: flex;
  font-weight: 600;
  font-size: 1.625rem;
  height: 16vw;
  justify-content: center;
  max-height: 60px;
  max-width: 60px;
  transition: $transition-base;
  width: 16vw;

  &:hover {
    border-color: $gray;
  }
}
.recovery-code-page__btn {
  bottom: 3.125rem;
  left: 50%;
  margin: 0 auto;
  position: absolute;
  transform: translateX(-50%);
  width: calc(100% - 4.5rem);
}
</style>