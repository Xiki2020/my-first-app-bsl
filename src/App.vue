<template>
  <div class="wrapper">
    <Header />
    <router-view />
    <footer>
      <NavBar />
    </footer>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    NavBar,
    Header,
  },
};
</script>

<style  lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap");
$main-bg-color: #1152fd;
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
.wrapper {
  min-height: 100vh;
  margin: 0 auto;
  max-width: 450px;
  position: relative;
  footer {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 1000;
  }
}
</style>
