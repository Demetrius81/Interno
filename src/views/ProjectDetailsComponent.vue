<template>
  <div>
    <article-header-component></article-header-component>
    <project-details-content-component></project-details-content-component>
  </div>
</template>

<script>
import ArticleHeaderComponent from "@/components/ArticleHeaderComponent.vue";
import ProjectDetailsContentComponent from "@/components/ProjectDetailsContentComponent.vue";
export default {
  components: {
    ArticleHeaderComponent,
    ProjectDetailsContentComponent,
  },
  name: "ProjectDetailsComponent",

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
