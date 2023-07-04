<template>
  <div>
    <header-component></header-component>
    <article-header-component></article-header-component>
    <latest-post-component></latest-post-component>
    <articles-news-component
      :cardsdata="smallcardsdata"
    ></articles-news-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import ArticleHeaderComponent from "./ArticleHeaderComponent.vue";
import ArticlesNewsComponent from "./ArticlesNewsComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import HeaderComponent from "./HeaderComponent.vue";
import LatestPostComponent from "./LatestPostComponent.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    ArticleHeaderComponent,
    LatestPostComponent,
    ArticlesNewsComponent,
  },
  props: {
    smallcardsdata: {
      type: Array,
      default: function () {
        return [];
      },
      required: true,
    },
  },
  name: "InternoBlogComponent",
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";
</style>
