<template>
  <div :class="['app', routeClass]">
    <Header class="app__header" v-if="$route.meta.headerTitle">
      {{ $route.meta.headerTitle }}
    </Header>
    <router-view class="app__content" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header.vue";
export default {
  components: {
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
</style>
