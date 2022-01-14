<template>
  <div
    class="app"
    :style="{
      'padding-bottom': $route.meta.navBar ? '68px' : 0,
    }"
  >
    <HeaderApp />
    <div class="wrapper">
      <router-view />
    </div>
    <footer v-if="$route.meta.navBar">
      <NavBar />
    </footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HeaderApp from "@/components/HeaderApp.vue";
export default {
  components: {
    NavBar,
    HeaderApp,
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
  margin: 0 auto;
  max-width: 450px;
  position: relative;

  footer {
    bottom: 0;
    position: fixed;
    max-width: 450px;
    width: 100%;
    z-index: 1000;
  }

  .wrapper {
    padding: 0 9.6%;
  }
}
</style>
