<template>
  <HeaderApp style="padding-top: 60px" />
  <div class="container-form">
    <FormApp />
  </div>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import FormApp from "@/components/FormApp.vue";
export default {
  name: "WelcomePage",
  components: {
    HeaderApp,
    FormApp,
  },
};
</script>

<style lang="scss" scoped>
.container-form {
  padding: 55px 9.6% 0;
}
</style>