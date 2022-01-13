<template>
  <div class="input">
    <input type="checkbox" id="input__checkbox" />
    <label for="input__checkbox">Forgot password?</label>
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
    border-color: white;
    border-radius: 50%;
    height: 20px;
    position: relative;
    width: 0px;
  }
  input::before {
    background-color: #f7f8f9;
    border: 0.5px solid #d5dde0;
    border-radius: 4px;
    content: "";
    display: inline-block;
    left: -4px;
    height: 22px;
    position: absolute;
    top: -2px;
    transition: border 0.1s linear;
    width: 22px;
  }
  input:hover::before {
    border-color: black;
  }
  input:checked::before {
    background-image: url("icons/check.jpg");
    background-size: cover;
    border: none;
  }
}
</style>