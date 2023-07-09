<!-- <template>
  <main-component></main-component>
</template> -->

<!-- <template>
  <blog-component></blog-component>
</template> -->

<!-- <template>
  <blog-details-component></blog-details-component>
</template> -->

<!-- <template>
  <project-component></project-component>
</template> -->

<template>
  <project-details-component></project-details-component>
</template>

<script>
// import ProjectComponent from "./views/ProjectComponent.vue";
// import BlogDetailsComponent from "./views/BlogDetailsComponent.vue";
import ProjectDetailsComponent from "./views/ProjectDetailsComponent.vue";
// import BlogComponent from "./views/BlogComponent.vue";
// import MainComponent from "./views/MainComponent.vue";

// Эти данные должны прийти с сервера в виде json. Мы их парсим и представляем в виде объекта.

export default {
  name: "App",
  components: {
    // ProjectComponent,
    // BlogDetailsComponent,
    ProjectDetailsComponent,
    // MainComponent,
    // BlogComponent,
  },
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";
</style>
