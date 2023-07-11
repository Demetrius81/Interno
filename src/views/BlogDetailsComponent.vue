<template>
  <div>
    <article-header-component></article-header-component>
    <details-component></details-component>
  </div>
</template>

<script>
import ArticleHeaderComponent from "@/components/ArticleHeaderComponent.vue";
import DetailsComponent from "../components/DetailsComponent.vue";
export default {
  components: {
    DetailsComponent,
    ArticleHeaderComponent,
  },
  name: "BlogDetailsComponent",
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";
</style>
