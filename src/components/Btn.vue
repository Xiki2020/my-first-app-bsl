<template>
  <div
    class="btn"
    :class="`btn-${variant}`"
    @click="$router.push({ name: 'Temp' })"
  >
    {{ text }}
  </div>
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
.btn {
  border-radius: 7px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  height: 36px;
  line-height: 36px;
  text-align: center;
  width: 73px;
  white-space: nowrap;
}

.btn-primary {
  background-color: #1152fd;
}

.btn-gray {
  background-color: #555;
}
</style>