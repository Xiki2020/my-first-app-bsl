<template>
  <AppWrapper class="header-app-v1" v-if="$route.meta.title">
    <div class="header-app-v1__content">
      <AppButton @click="$router.go(-1)" class="header-app-v1__btn">
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
      <div class="header-app-v1__title">
        {{ $route.meta.title }}
      </div>
    </div>
  </AppWrapper>
  <AppWrapper v-else-if="$route.meta.header_search" class="header-app-v2">
    <AppButton
      @click="$router.go(-1)"
      class="header-app-v2__btn"
      v-if="$route.name === 'SearchPage'"
    >
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
    <InputSearch class="header-app-v2__search" />
  </AppWrapper>
</template>
<script>
import AppWrapper from "@/components/AppWrapper.vue";
import AppButton from "@/components/AppButton.vue";
import InputSearch from "@/components/FormComponents/InputSearch.vue";
export default {
  components: {
    AppButton,
    AppWrapper,
    InputSearch,
  },

  props: {},

  name: "AppHeader",
};
</script>
<style  lang="scss" scoped>
.header-app-v1 {
  padding-bottom: 0;
  padding-top: 3.125rem;
}

.header-app-v1__content {
  align-items: center;
  display: flex;
}

.header-app-v1__btn {
  background-color: transparent;
  display: inline-block;
  width: auto;
  height: auto;
  line-height: 1;
  padding: 0;

  &:hover {
    opacity: 0.8;
    transform: none;
  }
}

.header-app-v1__title {
  color: $fc-gray;
  display: inline-block;
  font-weight: 600;
  font-size: 1.625rem;
  line-height: 1.25;
  margin: 0 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.header-app-v2 {
  display: flex;
  justify-content: space-between;
  left: 0;
  padding-top: 3.3rem;
  padding-bottom: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
}

.header-app-v2__btn {
  background-color: transparent;
  display: inline-block;
  width: auto;
  height: auto;
  line-height: 1;
  margin-right: 1rem;
  padding: 0;

  &:hover {
    opacity: 0.8;
    transform: none;
  }
}
.header-app-v2__search {
  width: 100%;
}
</style>>