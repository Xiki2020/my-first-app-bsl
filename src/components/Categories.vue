<template>
  <div class="categories">
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
            params: { category: category.category.toLowerCase() },
          })
        "
      >
        <img
          :src="require(`@/assets/icons/${category.icon}`)"
          :alt="category.category"
        />
      </button>
      <div class="categories__name-btn">{{ category.category }}</div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Categories",
  props: {},
  methods: mapActions("catalog", ["fethCategories"]),
  computed: mapGetters("catalog", ["getCategories"]),
  created() {
    this.fethCategories();
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
  width: 55px;
}
.categories__btn {
  background-color: rgba(17, 81, 251, 0.2);
  border-radius: 12px;
  border: none;
  cursor: pointer;
  height: 55px;
  outline: none;
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
  margin-top: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>