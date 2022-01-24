<template>
  <form class="confirmation-code" ref="form">
    <div class="confirmation-code__inputs">
      <input
        type="tel"
        v-model="inputs[index]"
        @input="changeFocus(index)"
        @keyup.delete="handleDelete(index)"
        @click="inputs[index] = ''"
        class="confirmation-code__input"
        v-for="(value, index) in inputs"
        :key="index"
        name="component_form_pin"
      />
    </div>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "ConfirmationCode",

  data() {
    return {
      inputs: ["", "", "", ""],
    };
  },

  methods: {
    changeFocus(index) {
      let input = this.inputs[index];
      const inputEl = this.$refs.form.component_form_pin[index + 1];

      if (!/[0-9]$/.exec(input)) {
        input = "";
      } else if (input.length >= 1) {
        input = input.substring(0, 1);
        if (inputEl) inputEl.focus();
      }
    },

    handleDelete(index) {
      const inputEl = this.$refs.form.component_form_pin[index - 1];
      if (index === 0) return;
      if (inputEl) inputEl.focus();
    },
  },
};
</script>

<style lang="scss" scoped>
.confirmation-code__inputs {
  display: flex;
  justify-content: space-between;
}
.confirmation-code__input {
  background: #f7f8f9;
  border: 0.5px solid $secondary;
  border-radius: 14px;
  color: $fc-gray;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.625rem;
  height: 60px;
  text-align: center;
  transition: $transition-base;
  width: 60px;
}
</style>