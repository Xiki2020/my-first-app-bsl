<template>
  <div class="title">
    <slot />
  </div>
</template>

<script>
export default {
  name: "TitleHeader",
}
</script>

<style lang="scss" scoped>
.title {
  color: $fc-gray;
  font-size: 0.8125rem;
  line-height: 1.85;
  word-wrap: break-word;
}
</style>