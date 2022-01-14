<template>
  <AppWrapper v-if="$route.meta.title">
    <div class="header-app">
      <ButtonComeBack />
      <div class="header-app__name-page">
        {{ $route.meta.title }}
      </div>
    </div>
  </AppWrapper>
  <div class="header-home" v-else-if="$route.name === 'HomePage'">
    <Search class="search" />
  </div>
</template>
<script>
import AppWrapper from "@/components/AppWrapper.vue";
import ButtonComeBack from "@/components/AppButton/ButtonComeBack.vue";
import Search from "@/components/Search/index.vue";
export default {
  components: {
    AppWrapper,
    ButtonComeBack,
    Search,
  },

  props: {},

  name: "AppHeader",
};
</script>
<style  lang="scss" scoped>
.header-app {
  padding-top: 49px;
  white-space: nowrap;
}

.header-app__name-page {
  color: #3e4958;
  display: inline-block;
  font-weight: 600;
  font-size: 26px;
  line-height: 1.25;
  margin-left: 15.5px;
}

.header-home {
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