<template>
  <div id="app">
    <header-component></header-component>
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
export default {
  components: {
    HeaderComponent,
  },
  name: "App",
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";
</style>
