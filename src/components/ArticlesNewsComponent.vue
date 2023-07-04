<template>
  <section class="small-content center">
    <div class="small-content__header">
      <h1 class="small-content__header_head">Articles & News</h1>
    </div>
    <div class="small-content__card-box">
      <card-component
        v-for="item in cardsOnPage"
        :key="item.id"
        :carddata="item"
      >
      </card-component>
    </div>
    <div class="small-content__pagination">
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
  </section>
</template>

<script>
import CardComponent from "./CardComponent.vue";
export default {
  components: { CardComponent },
  name: "ArticlesNewsComponent",
  props: {
    cardsdata: {
      type: Array,
      default: function () {
        return [];
      },
      required: true,
    },
  },
  data() {
    return {
      size: 6,
      currentPage: 1,
    };
  },
  methods: {
    moveLeft() {
      this.currentPage--;
    },
    moveRight() {
      this.currentPage++;
    },
    setPage(num) {
      this.currentPage = num;
    },
    moveToDetails(title) {
      //   window.location.href = "blog_details.html";
      console.log(title);
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.cardsdata.length / this.size);
    },
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
    cardsOnPage() {
      let result = [];
      let index = 1;
      for (
        let i = (this.currentPage - 1) * this.size;
        i < this.currentPage * this.size;
        i++
      ) {
        result.push({
          id: index,
          img: this.cardsdata[i].img,
          imgDescription: this.cardsdata[i].imgDescription,
          title: this.cardsdata[i].title,
          date: this.cardsdata[i].date,
        });
        index++;
      }
      console.log(result);
      return result;

      //Так было бы намного проще, но на странице 2 карточка из 6 имеет особенность в дизайне.
      // return cards.slice(
      //     (this.currentPage - 1) * size,
      //     this.currentPage * size);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";

.small-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  margin-bottom: 200px;

  &__header {
    width: $widthPage;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row;
    gap: 12px;
    margin-bottom: 52px;
    &_head {
      font-family: "DM Serif Display";
      font-style: normal;
      font-weight: 400;
      font-size: 50px;
      line-height: 125%;
      display: block;
      letter-spacing: 0.02em;
      color: $colorTextBasic;
    }
    &_text {
      width: 811px;
      font-family: "Jost";
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 150%;
      display: block;
      letter-spacing: 0.01em;
      color: $colorTextLight;
    }
  }

  &__card-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    gap: 27px;
  }

  &__pagination {
    margin-top: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

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
}
</style>
