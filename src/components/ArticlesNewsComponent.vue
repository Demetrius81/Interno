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
      <pagination-component
        @currentPageChanged="currentPageChanged"
        :startPage="currentPage"
        :totalPages="totalPages"
      ></pagination-component>
    </div>
  </section>
</template>

<script>
import CardComponent from "./CardComponent.vue";
import PaginationComponent from "./PaginationComponent.vue";
export default {
  components: { CardComponent, PaginationComponent },
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
    moveToDetails(title) {
      //   window.location.href = "blog_details.html";
      console.log(title);
    },
    currentPageChanged(data) {
      this.currentPage = data;
      console.log(data);
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.cardsdata.length / this.size);
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
}
</style>
