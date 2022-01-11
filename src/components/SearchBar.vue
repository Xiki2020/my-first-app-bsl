<template>
  <div class="search-bar">
    <input
      type="text"
      class="search-bar__input"
      id="search-bar__input"
      @keypress.enter="$router.push({ name: 'Temp' })"
    />
    <label for="search-bar__input" class="search-bar__placeholder">
      <img src="@/assets/icon_search_input.png" />
      <div class="search-bar__text-placeholder">Search</div>
    </label>
  </div>
</template>
<script>
export default {
  name: "SearchBar",
};
</script>

<style lang="scss" scoped>
.search-bar {
  align-items: center;
  display: flex;
  height: 60px;
  width: 75%;
}

.search-bar__input {
  background-color: #f7f8f9;
  border: none;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.25;
  margin-right: 5px;
  height: 100%;
  outline: none;
  padding-left: 18px;
  width: 100%;
}

.search-bar__placeholder {
  cursor: text;
  display: flex;
  margin-left: 18px;
  position: absolute;

  img {
    height: 20px;
    width: 20px;
  }
}
.search-bar__text-placeholder {
  color: #d5dde0;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.25;
  margin-left: 6.2px;
}

.search-bar__input:focus ~ .search-bar__placeholder {
  display: none;
}
</style>
