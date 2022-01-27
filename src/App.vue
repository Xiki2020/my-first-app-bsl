<template>
  <div :class="['app', routeClass, { 'app--search-opened': searchVisible }]">
    <Header class="app__header" v-if="$route.meta.headerTitle">
      {{ $route.meta.headerTitle }}
    </Header>
    <router-view class="app__content" />
    <NavBar class="app__nav" v-if="$route.meta.navBar" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import NavBar from "@/components/NavBar.vue";

import { mapState } from "vuex";

export default {
  name: "App",

  components: {
    NavBar,
    Header,
  },

  computed: {
    ...mapState("common", ["searchVisible"]),

    routeClass() {
      return `app--route-${this.$route.name.toLowerCase()}`;
    },
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

.app__nav {
  bottom: 0;
  margin-left: -$padding-side;
  max-width: $body-max-width;
  min-width: $body-min-width;
  position: fixed;
  width: 100%;
  z-index: 10;
}

.app--route-homepage {
  padding-top: 0;
}

.app--route-welcomepage {
  background-color: $primary;
}
</style>