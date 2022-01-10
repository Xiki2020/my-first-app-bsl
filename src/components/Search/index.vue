<template>
  <div class="search">
    <SearchBar />
    <BtnSearchPhoto />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";
import BtnSearchPhoto from "./components/ButtonSearchPhoto.vue";

export default {
  name: "Search",

  components: {
    SearchBar,
    BtnSearchPhoto
  },
}
</script>

<style>

</style>