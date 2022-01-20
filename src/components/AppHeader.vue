<template>
  <AppWrapper v-if="$route.meta.title" class="header-app-var-1">
    <div class="header-app-var-1__content">
      <AppButton @click="$router.go(-1)" class="header-app-var-1__btn">
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
      <div class="header-app-var-1__title">
        {{ $route.meta.title }}
      </div>
    </div>
  </AppWrapper>
  <div
    class="header-app-var-2"
    v-else-if="$route.name === 'HomePage' || $route.name === 'SearchPage'"
    :class="$route.name === 'SearchPage' ? 'header-app-var-2__search' : ''"
  >
    <AppWrapper class="header-app-var-2__wrapper">
      <AppButton
        @click="$router.go(-1)"
        class="header-app-var-1__btn"
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
      <InputSearch class="header-app-var-2__input" />
    </AppWrapper>
  </div>
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
.header-app-var-1 {
  padding-bottom: 0;
  padding-top: 3.125rem;
}

.header-app-var-1__content {
  align-items: center;
  display: flex;
}

.header-app-var-1__btn {
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

.header-app-var-1__title {
  color: $fc-gray;
  display: inline-block;
  font-weight: 600;
  font-size: 1.625rem;
  line-height: 1.25;
  margin: 0 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.header-app-var-2 {
  background-color: $primary;
  border-radius: 0 0 38px 38px;
  height: 231px;
  padding-top: 3.3rem;
  width: 100%;
}
.header-app-var-2__search {
  background-color: transparent;
  height: auto;
  transition: $transition-base;

  .header-app-var-2__wrapper {
    display: flex;
    justify-content: space-between;
    padding-bottom: 2.5rem;
  }

  .header-app-var-2__input {
    width: 87%;
    margin-left: 0.5rem;
  }
}
</style>>