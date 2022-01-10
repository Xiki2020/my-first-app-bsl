<template>
  <div class="search-bar">
    <input
      type="text"
      class="search-bar__input-text"
      placeholder=""
      id="search-bar__input-text"
    />
    <label for="search-bar__input-text" class="search-bar__placeholder-input">
      <div class="search-bar__icon-placeholder">
        <img
          :src="require('@/assets/icon_search_input.png')"
          width="100%"
        />
      </div>
      <p class="search-bar__text-placeholder">Search</p>
    </label>
  </div>
</template>
<script>
export default {
  name: "SearchBar"
};
</script>

<style lang="scss" scoped>
.search-bar {
  align-items: center;
  display: flex;
  height: 60px;
}

.search-bar__placeholder-input {
  display: flex;
  margin-left: 18px;
  position: absolute;
  transition: all 0.2s linear;
}

.search-bar__input-text {
  background-color: #f7f8f9;
  border: none;
  border-radius: 14px;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  margin-right: 5px;
  height: 100%;
  outline: none;
  padding-left: 18px;
  width: 100%;
}

.search-bar__icon-placeholder {
  height: 20px;
  width: 20px;
}
.search-bar__text-placeholder {
  color: #d5dde0;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  margin: 0;
  margin-left: 6.2px;
}

.search-bar__input-text:focus ~ .search-bar__placeholder-input {
  display: none;
}
</style>
