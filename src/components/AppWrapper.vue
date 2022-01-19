<template>
  <div class="app-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  name: "Wrapper",
};
</script>

<style  lang="scss" scoped>
.app-wrapper {
  padding: 0 2.25rem 3.125rem;
}
</style>
