<template>
  <button class="search-btn-foto"></button>
</template>
<script>
export default {
  name: "BtnSearchPhoto",
  props: {},
};
</script>

<style lang="scss" scoped>
.search-btn-foto {
  background-image: url('~@/assets/icon_search_btn.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 25px;
  border: none;
  border-radius: 14px;
  height: 60px;
  outline: none;
  width: 60px;
}
</style>