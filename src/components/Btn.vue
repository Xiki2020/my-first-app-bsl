<template>
  <button class="btn">{{ btnInfo.text }}l</button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    btnInfo: {
      type: Object,
      reqired: true,
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: var(--main-bg-color);
  border: none;
  border-radius: 7px;
  color: #ffffff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  height: 36px;
  letter-spacing: 0em;
  line-height: 15px;
  outline: none;
  width: 73px;
}
</style>