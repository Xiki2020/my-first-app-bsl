<template>
  <div class="header">
    <Button @click="$router.go(-1)" class="header__btn">
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
    </Button>
    <div class="header__title">
      <slot />
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button.vue";

export default {
  components: {
    Button,
  },
  name: "Header",
};
</script>
<style  lang="scss" scoped>
.header {
  align-items: center;
  display: flex;
  margin-bottom: 1rem;
  width: 100%;
}

.header__btn {
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
.header__title {
  color: $fc-gray;
  display: inline-block;
  font-weight: 600;
  font-size: 1.625rem;
  line-height: 1.25;
  margin: 0 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>>