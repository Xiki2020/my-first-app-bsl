<template>
  <div class="welcome-container">
    <div class="logo">
      <svg
        width="88"
        height="86"
        viewBox="0 0 88 86"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M75.6746 18.0457H10.0338C3.68145 18.0457 -1.0591 23.8923 0.205047 30.0866L3.42862 45.7305L5.92531 57.7714H18.2191H67.4892L64.2657 73.4153H21.4743H9.18048L11.6772 85.4563H23.971H61.8006H74.0944L76.5911 73.4153L79.8147 57.7714C81.1104 51.5455 76.3382 45.7305 69.9859 45.7305H15.754L12.5305 30.0866H73.2095L71.5661 38.0508H83.8599L85.5033 30.0866L88 18.0457H75.6746Z"
          fill="white"
        />
        <path d="M58.6084 0H27.0996V12.1358H58.6084V0Z" fill="white" />
      </svg>
    </div>
    <AppWrapper class="wrapper-button">
      <BigBtn
        text="Sign Up"
        variant="white"
        @click="$router.push({ name: 'SignUpPage' })"
      />
      <BigBtn text="Sign In" @click="$router.push({ name: 'SignInPage' })" />
    </AppWrapper>
  </div>
</template>

<script>
import AppWrapper from "@/components/AppWrapper.vue";
import BigBtn from "@/components/AppButton/BigBtn.vue";
export default {
  name: "WelcomePage",
  components: {
    AppWrapper,
    BigBtn,
  },
};
</script>

<style lang="scss" scoped>
.welcome-container {
  align-items: center;
  background-color: #1152fd;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 400px;
  justify-content: center;
}

.logo {
  align-items: center;
  display: flex;
  height: 100%;
  padding: 55px 0;
}

.wrapper-button {
  margin-top: auto;
  padding-bottom: 55px;
  width: 100%;
}
</style>