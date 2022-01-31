<template>
  <div class="welcome-page">
    <Logo />
    <div class="welcome-page__btns">
      <Button
        text="Sign Up"
        variant="white"
        class="welcome-page__btn"
        @click="$router.push({ name: 'SignUpPage' })"
      />
      <Button
        text="Sign In"
        class="welcome-page__btn welcome-page__btn--signin"
        @click="$router.push({ name: 'SignInPage' })"
      />
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue"
import Logo from "@/components/Logo.vue"

export default {
  name: "WelcomePage",
  components: {
    Button,
    Logo,
  },
}
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