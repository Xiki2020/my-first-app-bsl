<template>
  <div
    :class="['app', routeClass, {
      'app--search-opened': searchVisible
    }]"
  >
    <AppHeader class="app__header" v-if="$route.meta.headerTitle" />
    <div class="app__content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <AppNav v-if="$route.meta.appNav" class="app__nav" />
  </div>
</template>

<script>
import {
  mapState
} from "vuex";
import AppNav from "@/components/AppNav.vue";
import AppHeader from "@/components/AppHeader.vue";
export default {
  components: {
    AppNav,
    AppHeader,
  },

  computed: {
    ...mapState('common', [
      'searchVisible'
    ]),

    routeClass () {
      return `app--route-${this.$route.name}`
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
