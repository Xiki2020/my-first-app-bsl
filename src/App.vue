<template>
  <div
    class="app"
    :style="{
      'padding-bottom': $route.meta.navBar ? '68px' : 0,
    }"
  >
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

<style  lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap");
* {
  box-sizing: border-box;
  font-family: Montserrat;
}
body {
  margin: 0;
}
h1 {
  margin: 0;
}
.app {
  min-height: 100vh;
  min-width: 320px;
  margin: 0 auto;
  max-width: 450px;
  position: relative;
}

.app-nav {
  bottom: 0;
  position: fixed;
  max-width: 450px;
  width: 100%;
  z-index: 1000;
}
</style>
