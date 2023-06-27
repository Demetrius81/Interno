<template>
  <div>
    <header-component></header-component>
    <article-header-component></article-header-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import ArticleHeaderComponent from "./ArticleHeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import HeaderComponent from "./HeaderComponent.vue";
export default {
  components: { HeaderComponent, FooterComponent, ArticleHeaderComponent },
  name: "InternoBlogComponent",
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";
</style>
