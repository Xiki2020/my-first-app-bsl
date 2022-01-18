<template>
  <div class="app">
    <AppHeader />
    <router-view />
    <AppNav v-if="$route.meta.navBar" class="app__nav" />
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
  background-color: $white;
  min-height: 100vh;
  margin: 0 auto;
  max-width: $body-max-width;
  position: relative;
}

.app__nav {
  bottom: 0;
  position: fixed;
  min-width: $body-min-width;
  max-width: $body-max-width;
  width: 100%;
  z-index: 10;
}
</style>
