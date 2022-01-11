<template>
  <button class="btn" :class="`btn-${variant}`">{{ text }}</button>
</template>

<script>
export default {
  name: "Btn",
  props: {
    text: {
      type: String,
      reqired: true,
    },

    variant: {
      type: String,
      default: () => "primary",
      reqired: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$main-bg-color: #1152fd;

.btn {
  border: none;
  border-radius: 7px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  height: 36px;
  line-height: 15px;
  outline: none;
  width: 73px;
}

.btn-primary {
  background-color: $main-bg-color;
}

.btn-gray {
  background-color: #555;
}
</style>