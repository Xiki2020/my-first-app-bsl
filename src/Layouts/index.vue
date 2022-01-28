<template>
  <component :is="layout" />
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