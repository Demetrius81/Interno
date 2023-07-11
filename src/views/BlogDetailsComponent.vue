<template>
  <div>
    <article-header-component></article-header-component>
    <details-component></details-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import ArticleHeaderComponent from "@/components/ArticleHeaderComponent.vue";
import DetailsComponent from "../components/DetailsComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    DetailsComponent,
    ArticleHeaderComponent,
    FooterComponent,
  },
  name: "BlogDetailsComponent",
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";
</style>
