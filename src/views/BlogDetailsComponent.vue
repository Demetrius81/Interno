<template>
  <div>
    <header-component></header-component>
    <article-header-component></article-header-component>
    <details-component></details-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import ArticleHeaderComponent from "@/components/ArticleHeaderComponent.vue";
import DetailsComponent from "../components/DetailsComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
    DetailsComponent,
    FooterComponent,
    ArticleHeaderComponent,
  },
  name: "InternoBlogDetailsComponent",
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";
</style>
