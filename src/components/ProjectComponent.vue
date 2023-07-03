<template>
  <div>
    <header-component></header-component>
    <article-header-component :name="pageName"></article-header-component>
    <project-content-component
      :cards="cards"
      @change="change"
    ></project-content-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import ArticleHeaderComponent from "./ArticleHeaderComponent.vue";
import HeaderComponent from "./HeaderComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import ProjectContentComponent from "./ProjectContentComponent.vue";

export default {
  components: {
    HeaderComponent,
    ArticleHeaderComponent,
    FooterComponent,
    ProjectContentComponent,
  },

  name: "ProjectComponent",
  props: {
    cards: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      pageName: {
        header: "Our project",
        pagePath: "Project",
        id: 2,
      },
    };
  },

  mounted() {},

  methods: {
    change(data) {
      this.pageName.id = data;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";
</style>
