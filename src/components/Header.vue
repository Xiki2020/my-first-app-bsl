<template>
  <div class="header">
    <Search class="search" />
  </div>
</template>
<script>
import Search from "@/components/Search/index.vue";
export default {
  components: {
    Search,
  },

  name: "Header",

  props: {},
};
</script>
<style  lang="scss" scoped>
.header {
  background-color: #1152fd;
  border-radius: 0 0 38px 38px;
  height: 231px;
  padding: 53px 9.6% 0;
  width: 100%;
}

.search {
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: space-between;
  position: relative;
  width: 100%;
}
</style>>