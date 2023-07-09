<template>
  <div>
    <header-component></header-component>
    <article-header-component :name="pageName"></article-header-component>
    <latest-post-component></latest-post-component>
    <articles-news-component></articles-news-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import ArticleHeaderComponent from "../components/ArticleHeaderComponent.vue";
import ArticlesNewsComponent from "../components/ArticlesNewsComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import LatestPostComponent from "../components/LatestPostComponent.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    ArticleHeaderComponent,
    LatestPostComponent,
    ArticlesNewsComponent,
  },
  name: "InternoBlogComponent",
  data() {
    return {
      pageName: {
        header: "Articles & News",
        pagePath: "Blog",
        id: 5,
      },
    };
  },
  methods: {
    ...mapMutations(["LOAD_BLOG_PAGINATION"]),
  },
  beforeMount() {
    this.LOAD_BLOG_PAGINATION();
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";
</style>
