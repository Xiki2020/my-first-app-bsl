<template>
  <div :class="['app', routeClass]">
    <Header
      v-if="$route.meta.headerTitle"
      class="app__header"
    >
      {{ $route.meta.headerTitle }}
    </Header>
    <router-view class="app__content" />
  </div>
</template>

<script>
import { mapState } from "vuex"
import Header from "@/components/Header.vue"
export default {
  name: "AuthLayout",

  components: {
    Header,
  },

  computed: {
    ...mapState("common", ["searchVisible"]),

    routeClass() {
      return `app--route-${this.$route.name.toLowerCase()}`
    },
  },
}
</script>

<style  lang="scss" scoped>
.app {
  background-color: $white;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 3.125rem $padding-side 3.25rem;
  margin: 0 auto;
  max-width: $body-max-width;
  min-width: $body-min-width;
  position: relative;
}

.app--route-welcomepage {
  background-color: $primary;
  overflow: hidden;
}
</style>
