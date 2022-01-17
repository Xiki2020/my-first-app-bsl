<template>
  <div class="app">
    <AppHeader />
    <router-view />
    <AppNav v-if="$route.meta.navBar" class="app-nav" />
  </div>
</template>

<script>
import AppNav from "@/components/AppNav.vue";
import AppHeader from "@/components/AppHeader.vue";
export default {
  components: {
    AppNav,
    AppHeader,
  },
};
</script>

<style  lang="scss" scoped>
.app {
  min-height: 100vh;
  min-width: 280px;
  margin: 0 auto;
  max-width: 430px;
  position: relative;
}

.app-nav {
  bottom: 0;
  position: fixed;
  max-width: 430px;
  width: 100%;
  z-index: 1000;
}
</style>
