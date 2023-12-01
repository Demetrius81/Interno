<template>
  <div>
    <greetings-component></greetings-component>
    <large-content-component></large-content-component>
    <statistics-component></statistics-component>
    <small-content-component></small-content-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import GreetingsComponent from "../components/GreetingsComponent.vue";
import StatisticsComponent from "../components/StatisticsComponent.vue";
import LargeContentComponent from "../components/LargeContentComponent.vue";
import SmallContentComponent from "../components/SmallContentComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "MainComponent",
  components: {
    GreetingsComponent,
    StatisticsComponent,
    LargeContentComponent,
    SmallContentComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";
</style>
