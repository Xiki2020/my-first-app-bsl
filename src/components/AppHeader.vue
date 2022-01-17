<template>
  <AppWrapper v-if="$route.meta.title">
    <div class="header-app">
      <AppButton @click="$router.go(-1)" class="btn-comeback">
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.82828 8.29289L18.4141 8.29289L18.4141 10.2929L3.82828 10.2929L10.1212 16.5858L8.70696 18L-0.000149919 9.29289L8.70696 0.585786L10.1212 2L3.82828 8.29289Z"
            fill="#3E4958"
          />
        </svg>
      </AppButton>
      <div class="header-app__name-page">
        {{ $route.meta.title }}
      </div>
    </div>
  </AppWrapper>
  <div class="header-home" v-else-if="$route.name === 'HomePage'">
    <AppWrapper>
      <Search class="search" />
    </AppWrapper>
  </div>
</template>
<script>
import AppWrapper from "@/components/AppWrapper.vue";
import AppButton from "@/components/AppButton.vue";
import Search from "@/components/Search/index.vue";
export default {
  components: {
    AppButton,
    AppWrapper,
    Search,
  },

  props: {},

  name: "AppHeader",
};
</script>
<style  lang="scss" scoped>
.header-app {
  display: flex;
  padding-top: 3.125rem;
}

.btn-comeback {
  background-color: transparent;
  display: inline-block;
  width: auto;
  height: auto;
  line-height: 1;
  padding: 0;
}

.btn-comeback:hover {
  transform: translateX(-3px);
}

.header-app__name-page {
  color: $fc-gray;
  display: inline-block;
  font-weight: 600;
  font-size: 1.625rem;
  line-height: 1.25;
  margin: 0 1rem;
}

.header-home {
  background-color: #1152fd;
  border-radius: 0 0 38px 38px;
  height: 231px;
  padding-top: 3.3rem;
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