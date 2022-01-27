<template>
  <component :is="layout">
    <router-view class="app__content" />
  </component>
</template>

<script>
import AuthLayout from "./layouts/AuthLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";

export default {
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

<style  lang="scss" scoped>
</style>
