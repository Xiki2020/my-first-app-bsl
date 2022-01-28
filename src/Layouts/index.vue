<template>
  <div class="layout">
    <component :is="layout" />
  </div>
</template>

<script>
import AuthLayout from "./AuthLayout.vue";
import MainLayout from "./MainLayout.vue";

export default {
  name: "Layout",

  components: {
    AuthLayout,
    MainLayout,
  },

  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>

<style>
</style>