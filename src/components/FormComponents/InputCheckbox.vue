<template>
  <div class="input">
    <input type="checkbox" id="input__checkbox" />
    <label for="input__checkbox"></label>
    <div
      @click="$router.push({ name: 'ForgotPasswordPage' })"
      class="input__btn-forg-pass btn__scale"
    >
      Forgot password?
    </div>
  </div>
</template>

<script>
export default {
  name: "InputCheckbox",
  components: {},
};
</script>

<style lang="scss" scoped>
.input {
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.input {
  input {
    display: none;
  }

  label {
    display: flex;
  }

  label::before {
    background-color: #f7f8f9;
    border: 0.5px solid $secondary;
    border-radius: 4px;
    content: "";
    cursor: pointer;
    display: inline-block;
    height: 22px;
    transition: border 0.1s linear;
    width: 22px;
  }

  label:hover::before {
    border-color: black;
  }

  input:checked + label::before {
    background-image: url("icons/check.jpg");
    background-size: cover;
    border-color: #00d455;
  }

  .input__btn-forg-pass {
    color: $fc-gray;
    cursor: pointer;
    font-weight: 500;
  }
}
</style>