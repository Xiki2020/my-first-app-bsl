<template>
  <div class="header">
    <div class="header__title-page" @click="$router.go(-1)">
      <BackArrow />
      <div class="header__name-page">
        {{ $route.meta.title }}{{ $route.meta.text }}
      </div>
    </div>
  </div>
</template>
<script>
import BackArrow from "@/components/AppButton/BackArrow.vue";
export default {
  components: {
    BackArrow,
  },

  props: {},

  name: "Header",
};
</script>
<style  lang="scss" scoped>
.header {
  padding: 49px 9.6% 0;
}

.header__title-page {
  cursor: pointer;
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