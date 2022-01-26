<template>
  <div>
    <component :is="layout" />
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

export default {
  components: {
    MainLayout,
    AuthLayout
  },

  computed: {
    layout () {
      return this.$route.meta.layout || 'auth-layout'
    }
  },
};
</script>

<style  lang="scss" scoped>
.app {
  background-color: $white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 3.125rem $padding-side 4rem;
  margin: 0 auto;
  max-width: $body-max-width;
  min-width: $body-min-width;
  position: relative;
}

.app__header {
  margin-bottom: 1rem;
}

.app__nav {
  bottom: 0;
  position: fixed;
  min-width: $body-min-width;
  max-width: $body-max-width;
  width: 100%;
  z-index: 10;
}

.fade-enter-active,
.fade-leave-active {
  transition: $transition-base;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
