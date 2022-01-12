<template>
  <div class="header">
    <div class="header__title-page" @click="$router.go(-1)">
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
      <div class="header__name-page">{{ $route.meta.title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},

  props: {},

  name: "Header",
};
</script>
<style  lang="scss" scoped>
.header {
  height: 231px;
  padding: 53px 9.6% 0;
  width: 100%;
}

.header__name-page {
  color: #3e4958;
  display: inline-block;
  font-weight: 600;
  font-size: 26px;
  line-height: 1.25;
  margin-left: 15.5px;
}
</style>>