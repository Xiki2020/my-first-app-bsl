<template>
  <div class="container">
    header
    <router-view />
    footer
  </div>
</template>

<style  lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap");
$main-bg-color: #1152fd;
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
h1 {
  margin: 0;
}
.container {
  height: 812px;
  margin: 0 auto;
  max-width: 450px;
  position: relative;
}
</style>
