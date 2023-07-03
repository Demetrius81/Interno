<template>
  <div class="pagination" v-show="totalPages > 1">
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
        v-bind:disabled="currentPage === totalPages"
      >
        &#10095;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    totalPages: {
      type: Number,
      default: 1,
      required: true,
    },
    startPage: {
      type: Number,
      default: 1,
      required: true,
    },
  },
  data() {
    return {
      currentPage: this.startPage,
    };
  },

  mounted() {},

  methods: {
    moveLeft() {
      this.currentPage--;
      this.chandePage();
    },
    moveRight() {
      this.currentPage++;
      this.chandePage();
    },
    setPage(num) {
      this.currentPage = num;
      this.chandePage();
    },
    chandePage() {
      const data = this.currentPage;
      this.$emit("currentPageChanged", data);
    },
  },
  computed: {
    pagesArray() {
      let result = [];

      for (let i = 1; i <= this.totalPages; i++) {
        result.push({
          id: i,
          text: i < 10 ? `0${i}` : `${i}`,
        });
      }
      return result;
    },
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
