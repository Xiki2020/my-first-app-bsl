<template>
  <button class="btn" :class="`btn-${variant} btn_size_${size}`">
    {{ text }}
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
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
    size: {
      type: String,
      default: () => "default",
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
  font-size: 1rem;
  font-weight: 700;
  height: 60px;
  justify-content: center;
  line-height: 60px;
  transition: $transition-base;
  white-space: nowrap;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
  }
}

.btn_size_small {
  border-radius: 7px;
  font-size: 0.75rem;
  font-weight: 600;
  height: 36px;
  line-height: 36px;
  width: 73px;
}

.btn-gray {
  background-color: $gray;
}

.btn-primary {
  background-color: $primary;
}

.btn-secondary {
  background-color: $secondary;
}

.btn-white {
  background-color: $white;
  color: $primary;
}
</style>