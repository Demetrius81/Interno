<template>
  <div>
    <article-header-component :name="pageName"></article-header-component>
    <latest-post-component></latest-post-component>
    <articles-news-component></articles-news-component>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ArticleHeaderComponent from "../components/ArticleHeaderComponent.vue";
import ArticlesNewsComponent from "../components/ArticlesNewsComponent.vue";
import LatestPostComponent from "../components/LatestPostComponent.vue";
export default {
  components: {
    ArticleHeaderComponent,
    LatestPostComponent,
    ArticlesNewsComponent,
  },
  name: "BlogComponent",
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
