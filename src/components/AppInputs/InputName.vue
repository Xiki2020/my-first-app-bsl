<template>
  <div class="input">
    <label for="input__name">Name</label>
    <input
      type="name"
      id="input__name"
      placeholder="John Doe"
      v-model="value"
      @input="test"
    />
  </div>
</template>

<script>
export default {
  name: "InputName",
  components: {},
  data() {
    return {
      value: "",
    };
  },
  methods: {
    test() {
      console.log(/[a-zA-Z]|[ ]$/.exec(this.value));
      if (!/[a-zA-Z]|[ ]$/.exec(this.value))
        this.value = this.value.substring(0, this.value.length - 1);
    },
  },
};
</script>

<style lang="scss" scoped>
label,
input {
  display: block;
  color: #3e4958;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  transition: all 0.1s linear;
  width: 100%;
}
input {
  background-color: #f7f8f9;
  border: 0.5px solid #d5dde0;
  border-radius: 14px;
  height: 60px;
  margin-top: 10px;
  outline: none;
  padding: 20px 17px;
}
input:hover {
  border-color: black;
}
input::placeholder {
  color: #d5dde0;
  font-size: 14px;
}
</style>