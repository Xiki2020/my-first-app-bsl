<template>
  <div class="welcome-page">
    <Logo />
    <AppWrapper class="welcome-page__btns">
      <AppButton
        text="Sign Up"
        variant="white"
        @click="$router.push({ name: 'SignUpPage' })"
        class="welcome-page__btn"
      />
      <AppButton
        text="Sign In"
        @click="$router.push({ name: 'SignInPage' })"
        class="welcome-page__btn welcome-page__btn--signin"
      />
    </AppWrapper>
  </div>
</template>

<script>
import AppWrapper from "@/components/AppWrapper.vue";
import AppButton from "@/components/AppButton.vue";
import Logo from "@/components/Logo.vue";

export default {
  name: "WelcomePage",
  components: {
    AppWrapper,
    Logo,
    AppButton,
  },
};
</script>

<style lang="scss" scoped>
.welcome-page {
  align-items: center;
  background-color: $primary;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  min-height: 400px;
  user-select: none;
}

.welcome-page__btns {
  margin-top: auto;
  width: 100%;
}

.welcome-page__btn {
  transition: $transition-base;

  &:hover {
    transform: translateY(-5px);
  }
}

.welcome-page__btn--signin {
  &:hover {
    transform: none;
    opacity: 0.6;
  }
}
</style>