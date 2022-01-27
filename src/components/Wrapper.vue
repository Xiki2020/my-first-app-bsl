<template>
  <div class="wrapper">
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
.wrapper {
  padding: 0 $padding-side 3.125rem;
}
</style>
