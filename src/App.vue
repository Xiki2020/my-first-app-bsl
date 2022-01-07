<template>
  <div class="container">
    <router-view :cards="cards" />
  </div>
</template>

<style>
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
  max-width: 450px;
  height: 812px;

  margin: 0 auto;

  position: relative;
}
</style>

<script>
export default {
  data() {
    return {
      cards: [
        {
          name: "Nike React Miler",
          img: "05e36463-7f7d-4cbd-b246-e7e1a804bffa.jpg",
          price: "$170.00",
          countColors: 5,
        },
        {
          name: "Nike Air Max 270",
          img: "sneaker2.jpg",
          price: "$112.00",
          countColors: 5,
        },
        {
          name: "Air Max 2090",
          img: "popular-sneaker.jpg",
          price: "$200.00",
          countColors: 6,
        },
      ],
    };
  },
};
</script>