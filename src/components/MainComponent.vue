<template>
  <div>
    <header-component></header-component>
    <greetings-component></greetings-component>
    <large-content-component
      :cardsdata="bigcardsdata"
    ></large-content-component>
    <statistics-component></statistics-component>
    <small-content-component
      :cardsdata="smallcardsdata"
    ></small-content-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from "./HeaderComponent.vue";
import GreetingsComponent from "./GreetingsComponent.vue";
import FooterComponent from "./FooterComponent.vue";
import StatisticsComponent from "./StatisticsComponent.vue";
import LargeContentComponent from "./LargeContentComponent.vue";
import SmallContentComponent from "./SmallContentComponent.vue";

export default {
  name: "MainComponent",
  props: {
    smallcardsdata: {
      type: Array,
      default: function () {
        return [];
      },
      required: true,
    },
    bigcardsdata: {
      type: Array,
      default: function () {
        return [];
      },
      required: true,
    },
  },
  components: {
    HeaderComponent,
    FooterComponent,
    GreetingsComponent,
    StatisticsComponent,
    LargeContentComponent,
    SmallContentComponent,
  },
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
