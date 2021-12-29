<template>
  <div class="container">
    <router-view />
  </div>
</template>

<style>
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
}
</style>
