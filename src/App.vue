<template>
  <component :is="layout" />
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

export default {
  components: {
    MainLayout,
    AuthLayout,
  },

  computed: {
    layout() {
      return this.$route.meta.layout;
    },
  },
};
</script>

<style  lang="scss" scoped>
</style>
