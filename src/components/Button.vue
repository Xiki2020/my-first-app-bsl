<template>
  <button class="btn" :class="`btn--${variant} btn--${size}`">
    <slot></slot>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
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
  color: $white;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  overflow: hidden;
  padding: 1.2rem 0;
  text-overflow: ellipsis;
  transition: $transition-base;
  user-select: none;
  white-space: nowrap;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
  }
}

.btn--small {
  border-radius: 7px;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.65rem 0;
  width: 4.625rem;
}

.btn--gray {
  background-color: $fc-gray;
}

.btn--primary {
  background-color: $primary;
}

.btn--secondary {
  background-color: $secondary;

  &:hover {
    transform: none;
  }
}

.btn--white {
  background-color: $white;
  color: $primary;
}
</style>