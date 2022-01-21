<template>
  <div class="app">
    <AppHeader />
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.animation || 'slide'" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <AppNav v-if="$route.meta.app_nav" class="app__nav" />
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

.search-leave-active,
.search-enter-active {
  transition: opacity 0.5s, transform 0.5s;
}
.search-leave-to,
.search-enter-from {
  opacity: 0;
  transform: translateY(-20%);
}

.slide-leave-active,
.slide-enter-active {
  transition: opacity 0.3s, transform 0.3s;
}
.slide-leave-to,
.slide-enter-from {
  opacity: 0;
  transform: translateX(-5%);
}
</style>
