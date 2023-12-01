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
      <pagination-component></pagination-component>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import CardComponent from "./CardComponent.vue";
import PaginationComponent from "./PaginationComponent.vue";
export default {
  components: { CardComponent, PaginationComponent },
  name: "ArticlesNewsComponent",
  methods: {
    moveToDetails(title) {
      //   window.location.href = "blog_details.html";
      console.log(title);
    },
  },
  computed: {
    ...mapGetters(["cardsOnPage"]),
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
