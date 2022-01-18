<template>
  <div class="welcome-page">
    <Logo />
    <AppWrapper class="welcome-page__btns">
      <AppButton
        text="Sign Up"
        variant="white"
        @click="$router.push({ name: 'SignUpPage' })"
        class="welcome-page__btn welcome-page__signup"
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
  min-height: 400px;
  justify-content: center;
}

.welcome-page__btn {
  transition: $transition-base;

  &:hover {
    transform: translateY(-3px);
  }
}

.welcome-page__btn--signin {
  &:hover {
    transform: none;
    opacity: .6;
  }
}

.welcome-page__btns {
  margin-top: auto;
  padding-bottom: 3.5rem;
  width: 100%;
}

.btn-sign-in:hover {
  opacity: 0.8;
}
</style>