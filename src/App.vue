<!-- <template>
  <main-component
    :bigcardsdata="getCards"
    :smallcardsdata="getSmallCards.slice(0, 6)"
  ></main-component>
</template> -->

<template>
  <blog-component></blog-component>
</template>

<script>
import BlogComponent from "./components/BlogComponent.vue";
// import MainComponent from "./components/MainComponent.vue";

const cards = [
  {
    id: 1,
    imgSrc: "../assets/img/big-card__Photo1.png",
    imgAlt: "Picture 1",
    header: "Modern Kitchan",
    text: "Decor / Artchitecture",
  },
  {
    id: 2,
    imgSrc: "../assets/img/big-card__Photo2.png",
    imgAlt: "Picture 2",
    header: "Modern Kitchan",
    text: "Decor / Artchitecture",
  },
  {
    id: 3,
    imgSrc: "../assets/img/big-card__Photo3.png",
    imgAlt: "Picture 3",
    header: "Modern Kitchan",
    text: "Decor / Artchitecture",
  },
  {
    id: 4,
    imgSrc: "../assets/img/big-card__Photo4.png",
    imgAlt: "Picture 4",
    header: "Modern Kitchan",
    text: "Decor / Artchitecture",
  },
];

const smallCards = [
  {
    id: 1,
    img: "../assets/img/small-card__Photo1.png",
    imgDescription: "Kitchan Design",
    title: "Let’s Get Solution For Building Construction Work",
    date: "26 December,2022 ",
  },
  {
    id: 2,
    img: "../assets/img/small-card__Photo2.png",
    imgDescription: "Living Design",
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "22 December,2022 ",
  },
  {
    id: 3,
    img: "../assets/img/small-card__Photo3.png",
    imgDescription: "Interior Design",
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December,2022 ",
  },
  {
    id: 4,
    img: "../assets/img/small-card__Photo4.png",
    imgDescription: "Kitchan Design",
    title: "Let’s Get Solution For Building Construction Work",
    date: "25 December,2022 ",
  },
  {
    id: 5,
    img: "../assets/img/small-card__Photo5.png",
    imgDescription: "Living Design",
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "25 December,2022 ",
  },
  {
    id: 6,
    img: "../assets/img/small-card__Photo6.png",
    imgDescription: "Interior Design",
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December,2022 ",
  },
  {
    id: 7,
    img: "../assets/img/small-card__Photo2.png",
    imgDescription: "Living Design",
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "22 December,2022 ",
  },
  {
    id: 8,
    img: "../assets/img/small-card__Photo3.png",
    imgDescription: "Interior Design",
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December,2022 ",
  },
  {
    id: 9,
    img: "../assets/img/small-card__Photo4.png",
    imgDescription: "Kitchan Design",
    title: "Let’s Get Solution For Building Construction Work",
    date: "25 December,2022 ",
  },
  {
    id: 10,
    img: "../assets/img/small-card__Photo5.png",
    imgDescription: "Living Design",
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "25 December,2022 ",
  },
  {
    id: 11,
    img: "../assets/img/small-card__Photo3.png",
    imgDescription: "Interior Design",
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December,2022 ",
  },
  {
    id: 12,
    img: "../assets/img/small-card__Photo4.png",
    imgDescription: "Kitchan Design",
    title: "Let’s Get Solution For Building Construction Work",
    date: "25 December,2022 ",
  },
  {
    id: 13,
    img: "../assets/img/small-card__Photo5.png",
    imgDescription: "Living Design",
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "25 December,2022 ",
  },
  {
    id: 14,
    img: "../assets/img/small-card__Photo6.png",
    imgDescription: "Interior Design",
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December,2022 ",
  },
  {
    id: 15,
    img: "../assets/img/small-card__Photo2.png",
    imgDescription: "Living Design",
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "22 December,2022 ",
  },
  {
    id: 16,
    img: "../assets/img/small-card__Photo3.png",
    imgDescription: "Interior Design",
    title: "Best For Any Office & Business Interior Solution",
    date: "25 December,2022 ",
  },
  {
    id: 17,
    img: "../assets/img/small-card__Photo4.png",
    imgDescription: "Kitchan Design",
    title: "Let’s Get Solution For Building Construction Work",
    date: "25 December,2022 ",
  },
  {
    id: 18,
    img: "../assets/img/small-card__Photo5.png",
    imgDescription: "Living Design",
    title: "Low Cost Latest Invented Interior Designing Ideas.",
    date: "25 December,2022 ",
  },
];

export default {
  name: "App",
  components: {
    // MainComponent,
    BlogComponent,
  },

  computed: {
    getCards() {
      return cards;
    },
    getSmallCards() {
      return smallCards;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";
</style>
