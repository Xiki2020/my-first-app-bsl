<template>
  <div class="categories">
    <Button
      v-for="category in getСategories"
      :key="category"
      class="categories__btn"
      size="small"
      @click="
        $router.push({
          name: 'ProductListPage',
          params: { category: category },
        })
      "
    >
      {{ category.slice(0, 1).toUpperCase() + category.slice(1) }}
    </Button>
  </div>
</template>
<script>
import Button from "@/components/Button.vue"

import { mapGetters, mapActions } from "vuex"
export default {
  name: "Categories",

  components: {
    Button,
  },

  computed: mapGetters("catalog", ["getСategories"]),

  created() {
    this.fetchСategories()
  },

  methods: mapActions("catalog", ["fetchСategories"]),
}
</script>

<style lang="scss" scoped>
.categories {
  align-items: center;
  display: flex;
  height: 55px;
  justify-content: space-between;
  text-align: center;
  width: 100%;
}
.categories__wrapper-btn {
  height: 100%;
  width: 20%;
}

.categories__btn {
  border-left: 0.5px solid $white;
  border-right: 0.5px solid $white;
  font-size: 0.6rem;
  height: 100%;
  overflow: visible;
  padding: 0.6rem 0.1rem;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  word-wrap: break-word;
}
// .categories__btn {
//   background-color: rgba(17, 81, 251, 0.2);
//   border-radius: 12px;
//   border: none;
//   cursor: pointer;
//   height: 100%;
//   outline: none;
//   padding: 0.75rem 0;
//   transition: $transition-base;
//   width: 100%;

//   &:hover {
//     transform: translateY(-3px);
//   }
// }

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