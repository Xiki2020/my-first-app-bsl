<template>
  <AppWrapper style="padding-top: 0.95rem">
    <div class="description">
      The recovery code was sent to your mobile. Code expiration time is 120s.
      Please enter the code:
    </div>
    <form class="form">
      <div class="form__pin">
        <input
          type="tel"
          id="form__input"
          v-model="pinValue"
          @input="validationPin"
        />
        <div class="form__input">
          <label for="form__input" v-for="n in 4" :key="n"
            ><div>
              {{ pinValue[n - 1] }}
            </div></label
          >
        </div>
      </div>
      <div class="btn-send">
        <AppButton
          text="Send again"
          @click="isValidationPin"
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
};
</script>

<style lang="scss" scoped>
.form {
  min-height: 200px;
}

.btn-send {
  bottom: 3.4375rem;
  left: 50%;
  margin: 0 auto;
  position: absolute;
  transform: translateX(-50%);
  width: calc(100% - 4.5rem);
}

.description {
  color: $fc-gray;
  font-size: 0.8125rem;
  line-height: 1.85;
}

.form__pin {
  display: flex;
  justify-content: space-between;
  margin-top: 55px;
  position: relative;

  .form__input {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
  }

  input {
    opacity: 0;
  }

  input:focus ~ .form__input label {
    border-color: #000000;
  }

  label {
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
    width: 16vw;
  }
}
</style>