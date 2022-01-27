<template>
  <div class="welcome-page">
    <Logo />
    <div class="welcome-page__btns">
      <Button
        text="Sign Up"
        variant="white"
        @click="$router.push({ name: 'SignUpPage' })"
        class="welcome-page__btn"
      />
      <Button
        text="Sign In"
        @click="$router.push({ name: 'SignInPage' })"
        class="welcome-page__btn welcome-page__btn--signin"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Logo from "@/components/Logo.vue";

export default {
  name: "WelcomePage",
  components: {
    Button,
    Logo,
  },
};
</script>

<style lang="scss" scoped>
.welcome-page {
  align-items: center;
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  justify-content: center;
  user-select: none;
}
.welcome-page__btns {
  margin-top: auto;
  width: 100%;
}
.welcome-page__btn {
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