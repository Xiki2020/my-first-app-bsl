<template>
  <div class="categories">
    <div
      class="categories__wrapper-btn"
      v-for="category in getCategors"
      :key="category"
    >
      <button
        class="categories__btn"
        @click="
          $router.push({
            name: 'ProductListPage',
            params: { category: category },
          })
        "
      >
        <div class="categories__name-btn">
          {{ category.slice(0, 1).toUpperCase() + category.slice(1) }}
        </div>
      </button>
    </div>
  </div>

  <!-- <div class="categories">
    <div
      class="categories__wrapper-btn"
      v-for="category in getCategories"
      :key="category.category"
    >
      <button
        class="categories__btn"
        @click="
          $router.push({
            name: 'ProductListPage',
            params: { category: category },
          })
        "
      >
        <img
          :src="require(`@/assets/icons/${category.icon}`)"
          :alt="category"
        />
      </button>
      <div class="categories__name-btn">{{ category.category }}</div>
    </div>
  </div> -->
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Categories",
  props: {},
  methods: mapActions("catalog", ["fetchCategories", "fetchCategors"]),
  computed: mapGetters("catalog", ["getCategories", "getCategors"]),
  created() {
    this.fetchCategors();
    this.fetchCategories();
  },
};
</script>

<style lang="scss" scoped>
.categories {
  align-items: center;
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 100%;
}
.categories__wrapper-btn {
  height: 100%;
  width: 20%;
}
.categories__btn {
  background-color: rgba(17, 81, 251, 0.2);
  border-radius: 12px;
  border: none;
  cursor: pointer;
  height: 100%;
  outline: none;
  padding: 0.75rem 0;
  transition: $transition-base;
  width: 100%;

  &:hover {
    transform: translateY(-3px);
  }
}

.categories__name-btn {
  color: $fc-gray;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.25;
  //   margin-top: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
}
</style>