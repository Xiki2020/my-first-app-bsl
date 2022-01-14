<template>
  <div class="container" @click="test">
    <div class="description">
      The recovery code was sent to your mobile. Code expiration time is 120s.
      Please enter the code:
    </div>
    <form class="form">
      <div class="form__pin">
        <input
          type="text"
          id="form__input"
          v-model="pinValue"
          @input="validationPin"
        />
        <div class="form__input">
          <label for="form__input" v-for="n in 4" :key="n">{{
            pinValue[n - 1]
          }}</label>
        </div>
      </div>
      <div class="container-btn">
        <BigBtn
          text="Send again"
          @click="$router.push({ name: 'NewPasswordPage' })"
        />
      </div>
    </form>
  </div>
</template>

<script>
import BigBtn from "@/components/AppButton/BigBtn.vue";

export default {
  name: "RecoveryCodePage",
  components: {
    BigBtn,
  },
  data() {
    return {
      pinValue: "",
    };
  },
  methods: {
    validationPin() {
      if (this.pinValue.length > 4) {
        this.pinValue = this.pinValue.substring(0, 4);
      }
      if (!/[0-9]$/.exec(this.pinValue)) {
        this.pinValue = this.pinValue.substring(0, this.pinValue.length - 1);
      }
    },
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
    background: #f7f8f9;
    border: 0.5px solid #d5dde0;
    border-radius: 14px;
    color: #3e4958;
    cursor: pointer;
    display: block;
    font-weight: 600;
    font-size: 26px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    width: 60px;
  }
}
</style>