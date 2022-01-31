<template>
  <component :is="layout" />
</template>

<script>
import AuthLayout from "./layouts/AuthLayout.vue"
import MainLayout from "./layouts/MainLayout.vue"

export default {
  name: "App",

  components: {
    AuthLayout,
    MainLayout,
  },

  computed: {
    layout() {
      return this.$route.meta.layout
    },
  },
}
</script>