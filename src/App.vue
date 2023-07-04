<!-- <template>
  <main-component
    :bigcardsdata="getCards"
    :smallcardsdata="getSmallCards.slice(0, 6)"
  ></main-component>
</template> -->

<!-- <template>
  <blog-component :smallcardsdata="getSmallCards"></blog-component>
</template> -->

<template>
  <blog-details-component
    :tags="getTags"
    :articles="getArticles"
  ></blog-details-component>
</template>

<script>
import BlogDetailsComponent from "./components/BlogDetailsComponent.vue";
// import BlogComponent from "./components/BlogComponent.vue";
// import MainComponent from "./components/MainComponent.vue";

// Эти данные должны прийти с сервера в виде json. Мы их парсим и представляем в виде объекта.
const data = {
  cards: [
    {
      id: 1,
      imgSrc: "./img/big-card__Photo1.png",
      imgAlt: "Picture 1",
      header: "Modern Kitchan",
      text: "Decor / Artchitecture",
    },
    {
      id: 2,
      imgSrc: "./img/big-card__Photo2.png",
      imgAlt: "Picture 2",
      header: "Modern Kitchan",
      text: "Decor / Artchitecture",
    },
    {
      id: 3,
      imgSrc: "./img/big-card__Photo3.png",
      imgAlt: "Picture 3",
      header: "Modern Kitchan",
      text: "Decor / Artchitecture",
    },
    {
      id: 4,
      imgSrc: "./img/big-card__Photo4.png",
      imgAlt: "Picture 4",
      header: "Modern Kitchan",
      text: "Decor / Artchitecture",
    },
  ],

  smallCards: [
    {
      id: 1,
      img: "./img/small-card__Photo1.png",
      imgDescription: "Kitchan Design",
      title: "Let’s Get Solution For Building Construction Work",
      date: "26 December,2022 ",
    },
    {
      id: 2,
      img: "./img/small-card__Photo2.png",
      imgDescription: "Living Design",
      title: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "22 December,2022 ",
    },
    {
      id: 3,
      img: "./img/small-card__Photo3.png",
      imgDescription: "Interior Design",
      title: "Best For Any Office & Business Interior Solution",
      date: "25 December,2022 ",
    },
    {
      id: 4,
      img: "./img/small-card__Photo4.png",
      imgDescription: "Kitchan Design",
      title: "Let’s Get Solution For Building Construction Work",
      date: "25 December,2022 ",
    },
    {
      id: 5,
      img: "./img/small-card__Photo5.png",
      imgDescription: "Living Design",
      title: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "25 December,2022 ",
    },
    {
      id: 6,
      img: "./img/small-card__Photo6.png",
      imgDescription: "Interior Design",
      title: "Best For Any Office & Business Interior Solution",
      date: "25 December,2022 ",
    },
    {
      id: 7,
      img: "./img/small-card__Photo2.png",
      imgDescription: "Living Design",
      title: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "22 December,2022 ",
    },
    {
      id: 8,
      img: "./img/small-card__Photo3.png",
      imgDescription: "Interior Design",
      title: "Best For Any Office & Business Interior Solution",
      date: "25 December,2022 ",
    },
    {
      id: 9,
      img: "./img/small-card__Photo4.png",
      imgDescription: "Kitchan Design",
      title: "Let’s Get Solution For Building Construction Work",
      date: "25 December,2022 ",
    },
    {
      id: 10,
      img: "./img/small-card__Photo5.png",
      imgDescription: "Living Design",
      title: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "25 December,2022 ",
    },
    {
      id: 11,
      img: "./img/small-card__Photo3.png",
      imgDescription: "Interior Design",
      title: "Best For Any Office & Business Interior Solution",
      date: "25 December,2022 ",
    },
    {
      id: 12,
      img: "./img/small-card__Photo4.png",
      imgDescription: "Kitchan Design",
      title: "Let’s Get Solution For Building Construction Work",
      date: "25 December,2022 ",
    },
    {
      id: 13,
      img: "./img/small-card__Photo5.png",
      imgDescription: "Living Design",
      title: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "25 December,2022 ",
    },
    {
      id: 14,
      img: "./img/small-card__Photo6.png",
      imgDescription: "Interior Design",
      title: "Best For Any Office & Business Interior Solution",
      date: "25 December,2022 ",
    },
    {
      id: 15,
      img: "./img/small-card__Photo2.png",
      imgDescription: "Living Design",
      title: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "22 December,2022 ",
    },
    {
      id: 16,
      img: "./img/small-card__Photo3.png",
      imgDescription: "Interior Design",
      title: "Best For Any Office & Business Interior Solution",
      date: "25 December,2022 ",
    },
    {
      id: 17,
      img: "./img/small-card__Photo4.png",
      imgDescription: "Kitchan Design",
      title: "Let’s Get Solution For Building Construction Work",
      date: "25 December,2022 ",
    },
    {
      id: 18,
      img: "./img/small-card__Photo5.png",
      imgDescription: "Living Design",
      title: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "25 December,2022 ",
    },
  ],

  tags: [
    {
      id: 1,
      tagName: "Kitchen",
      check: false,
    },
    {
      id: 2,
      tagName: "Bedroom",
      check: false,
    },
    {
      id: 3,
      tagName: "Building",
      check: false,
    },
    {
      id: 4,
      tagName: "Architecture",
      check: false,
    },
    {
      id: 5,
      tagName: "Kitchen Planning",
      check: false,
    },
    {
      id: 6,
      tagName: "Bedroom",
      check: false,
    },
  ],

  articles: [
    {
      id: 1,
      tag: "Kitchen",
      urlImg: "./img/details1.png",
      title: `Kitchen Let’s Get Solution For Building Construction Work`,
      description: ``,
      listOfProperties: [],
      content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
      date: "26 December,2022",
    },
    {
      id: 2,
      tag: "Kitchen Planning",
      urlImg: "./img/details2.png",
      title: `Kitchen Planning Low Cost Latest Invented Interior Designing Ideas.`,
      description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
      listOfProperties: [
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
      ],
      content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
      date: "26 December,2022",
    },
    {
      id: 3,
      tag: "Building",
      urlImg: "./img/details1.png",
      title: `Building Best For Any Office & Business Interior Solution`,
      description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
      listOfProperties: [
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
      ],
      content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
      date: "26 December,2022",
    },
    {
      id: 4,
      tag: "Bedroom",
      urlImg: "./img/details2.png",
      title: `Bedroom Let’s Get Solution For Building Construction Work`,
      description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
      listOfProperties: [
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
      ],
      content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
      date: "26 December,2022",
    },
    {
      id: 5,
      tag: "Architecture",
      urlImg: "./img/details1.png",
      title: `Architecture Low Cost Latest Invented Interior Designing Ideas.`,
      description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
      listOfProperties: [
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
      ],
      content: ``,
      date: "26 December,2022",
    },
    {
      id: 6,
      tag: "Building",
      urlImg: "./img/details2.png",
      title: `Building Best For Any Office & Business Interior Solution`,
      description: ``,
      listOfProperties: [],
      content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
      date: "26 December,2022",
    },
    {
      id: 7,
      tag: "Kitchen",
      urlImg: "./img/details1.png",
      title: `Kitchen Best For Any Office & Business Interior Solution`,
      description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary have suffered.`,
      listOfProperties: [
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
      ],
      content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
      date: "26 December,2022",
    },
    {
      id: 8,
      tag: "Kitchen",
      urlImg: "./img/details2.png",
      title: `Kitchen Best For Any Office & Business Interior Solution`,
      description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
      listOfProperties: [
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
      ],
      content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
      date: "26 December,2022",
    },
    {
      id: 9,
      tag: "Bedroom",
      urlImg: "./img/details1.png",
      title: `Bedroom Best For Any Office & Business Interior Solution`,
      description: ``,
      listOfProperties: [],
      content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
      date: "26 December,2022",
    },
    {
      id: 10,
      tag: "Building",
      urlImg: "./img/details2.png",
      title: `Building Best For Any Office & Business Interior Solution`,
      description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
      listOfProperties: [
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
      ],
      content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
      date: "26 December,2022",
    },
    {
      id: 11,
      tag: "Building",
      urlImg: "./img/details1.png",
      title: `Building Best For Any Office & Business Interior Solution`,
      description: ``,
      listOfProperties: [
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
        `Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
      ],
      content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
      date: "26 December,2022",
    },
    {
      id: 12,
      tag: "Architecture",
      urlImg: "./img/details2.png",
      title: `Architecture Best For Any Office & Business Interior Solution`,
      description: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
      listOfProperties: [],
      content: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                                Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.`,
      date: "26 December,2022",
    },
  ],
};

export default {
  name: "App",
  components: {
    BlogDetailsComponent,
    // MainComponent,
    // BlogComponent,
  },

  computed: {
    getCards() {
      return data.cards;
    },
    getSmallCards() {
      return data.smallCards;
    },
    getArticles() {
      return data.articles;
    },
    getTags() {
      return data.tags;
    },
  },
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";
</style>
