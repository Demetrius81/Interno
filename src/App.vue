<template>
  <div id="app">
    <header-component></header-component>
    <router-view />
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  name: "App",
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";
</style>
