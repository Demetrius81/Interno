<template>
  <div>
    <header-component></header-component>
    <details-component
      :dataarticles="articles"
      :datatags="tags"
    ></details-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import DetailsComponent from "./DetailsComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import HeaderComponent from "./HeaderComponent.vue";
export default {
  components: { HeaderComponent, DetailsComponent, FooterComponent },
  name: "InternoBlogDetailsComponent",
  props: {
    tags: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    articles: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";
</style>
