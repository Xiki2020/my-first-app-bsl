<template>
  <div class="app">
    <router-view v-slot="{ Component, route }">
      <AppHeader v-if="route.meta.headerTitle" />
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
      <AppNav v-if="route.meta.appNav" class="app__nav" />
    </router-view>
  </div>
</template>

<script>
import AppNav from "@/components/AppNav.vue";
import AppHeader from "@/components/AppHeader.vue";
export default {
  components: {
    AppNav,
    AppHeader,
  },
};
</script>

<style  lang="scss" scoped>
.app {
  background-color: $white;
  min-height: 100vh;
  margin: 0 auto;
  max-width: $body-max-width;
  min-width: $body-min-width;
  position: relative;
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
