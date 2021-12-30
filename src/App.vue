<template>
  <div class="container">
    <router-view />
  </div>
</template>

<style>
// TODO: scoped
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap");
:root {
  --main-bg-color: #1152fd;
}
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
  max-width: 100vw;
  height: 100vh;

  margin: 0 auto;
  overflow: hidden;
}
</style>
