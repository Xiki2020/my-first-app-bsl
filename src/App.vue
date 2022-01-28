<template>
  <component :is="layout" />
</template>

<script>
import AuthLayout from "./layout/AuthLayout.vue";
import MainLayout from "./layout/MainLayout.vue";

export default {
  name: "App",

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