<template>
  <button class="btn" :class="`btn-${variant}`">
    {{ text }}
    <slot></slot>
  </button>
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
  align-items: center;
  border: none;
  border-radius: 14px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  height: 60px;
  justify-content: center;
  line-height: 60px;
  white-space: nowrap;
  width: 100%;
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