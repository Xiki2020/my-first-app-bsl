<template>
  <div class="btn" :class="`btn-${variant}`">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "BigBtn",
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
.btn {
  border-radius: 14px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  height: 60px;
  line-height: 60px;
  text-align: center;
  width: 80%;
  white-space: nowrap;
}

.btn-white {
  background-color: #ffffff;
  color: #1152fd;
}

.btn-primary {
  background-color: #1152fd;
}

.btn-secondary {
  background-color: #d5dde0;
}
</style>