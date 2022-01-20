<template>
  <form class="custom-form-pin" name="form_pin" id="custom-form-pin">
    <div class="custom-form-pin__inputs">
      <input
        type="tel"
        v-model="valuesPin[index]"
        @input="changeFocus(index)"
        @keyup.delete="dlt(index)"
        @click="valuesPin[index] = ''"
        class="custom-form-pin__input"
        v-for="(value, index) in valuesPin"
        :key="index"
        name="component_form_pin"
      />
    </div>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "CustomFormPin",
  data() {
    return {
      valuesPin: ["", "", "", ""],
    };
  },
  methods: {
    changeFocus(index) {
      if (!/[0-9]$/.exec(this.valuesPin[index])) {
        this.valuesPin[index] = "";
      } else if (this.valuesPin[index].length >= 1) {
        this.valuesPin[index] = this.valuesPin[index].substring(0, 1);
        document.forms.form_pin.component_form_pin[index + 1].focus();
      }
    },
    dlt(index) {
      if (index > 0) {
        document.forms.form_pin.component_form_pin[index - 1].focus();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-form-pin__inputs {
  display: flex;
  justify-content: space-between;
}
.custom-form-pin__input {
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