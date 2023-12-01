<template>
  <div>
    <header-component></header-component>
    <article-header-component></article-header-component>
    <project-details-content-component></project-details-content-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import ArticleHeaderComponent from "@/components/ArticleHeaderComponent.vue";
import ProjectDetailsContentComponent from "@/components/ProjectDetailsContentComponent.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    ArticleHeaderComponent,
    ProjectDetailsContentComponent,
  },
  name: "InternoProjectDetailsComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";
</style>
