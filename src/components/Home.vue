<template>
  <header class="header">
    <div class="search">
      <input
        type="text"
        class="search__input-text"
        placeholder=""
        id="search__input-text"
      />
      <label for="search__input-text" class="search__placeholder-input">
        <div class="search__icon-placeholder">
          <img
            src="../assets/icon_search_input.png"
            alt="icon search"
            width="100%"
          />
        </div>
        <p class="search__text-placeholder">Search</p>
      </label>
      <button class="search__btn-foto"></button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Home",
  props: {},
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 231px;

  padding: 53px 9.6% 0;

  border-radius: 0 0 38px 38px;
  background-color: var(--main-bg-color);
}

.search {
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
}

.search__input-text,
.search__btn-foto {
  height: 100%;

  border: none;
  outline: none;
  border-radius: 14px;
  background-color: #f7f8f9;
}

.search__input-text {
  width: 224px;

  padding-left: 18px;
}

.search__btn-foto {
  width: 60px;

  background-image: url(../assets/icon_search_btn.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 25px;
}

.search__placeholder-input {
  display: flex;
  margin-left: 18px;

  position: absolute;

  transition: all 0.2s linear;
}

.search__icon-placeholder {
  width: 20px;
  height: 20px;
}
.search__text-placeholder {
  margin: 0;
  margin-left: 6.2px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #d5dde0;
}

.search__input-text:focus ~ .search__placeholder-input {
  display: none;
}
</style>