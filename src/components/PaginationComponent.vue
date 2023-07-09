<template>
  <div class="pagination" v-show="getTotalPages > 1">
    <div class="pagination__box">
      <button
        class="pagination__box_button button-left"
        v-on:click="moveLeft()"
        v-bind:disabled="currentPage === 1"
      >
        &#10094;
      </button>
      <button
        class="pagination__box_button"
        v-for="item in pagesArray"
        :key="item.id"
        v-bind:class="{ current: item.id === currentPage }"
        v-on:click="setPage(item.id)"
      >
        {{ item.text }}
      </button>
      <button
        class="pagination__box_button button-right"
        v-on:click="moveRight()"
        v-bind:disabled="currentPage === getTotalPages"
      >
        &#10095;
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "PaginationComponent",
  methods: {
    ...mapMutations(["PAGE_UP", "PAGE_DOWN", "PAGE_SET"]),
    moveLeft() {
      this.PAGE_DOWN();
    },
    moveRight() {
      this.PAGE_UP();
    },
    setPage(num) {
      this.PAGE_SET(num);
    },
  },
  computed: {
    ...mapState(["currentPage"]),
    ...mapGetters(["getTotalPages", "pagesArray"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";
.pagination {
  &__box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    &_button {
      height: 52px;
      width: 52px;
      border: $colorLogo 1px solid;
      border-radius: 26px;
      background: $colorBacgroundMain;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Jost";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      text-transform: capitalize;
    }
    .current {
      background: $colorBacgroundBtnBigCard;
      border: none;
    }
  }
}
</style>
