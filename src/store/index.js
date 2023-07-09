import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
        like: false,
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
        like: false,
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
        like: false,
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
        like: false,
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
        like: false,
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
        like: false,
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
        like: false,
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
        like: false,
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
        like: false,
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
        like: false,
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
        like: false,
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
        like: false,
      },
    ],
    projectSwitcher: [
      {
        id: 1,
        name: "Bathroom",
        img: "",
        enabled: false,
      },
      {
        id: 2,
        name: "Bed Room",
        img: "",
        enabled: false,
      },
      {
        id: 3,
        name: "Kitchan",
        img: "",
        enabled: false,
      },
      {
        id: 4,
        name: "Living Area",
        img: "",
        enabled: false,
      },
    ],
    projectCards: [
      {
        id: 1,
        img: "./img/card_project_1.png",
        title: "Minimal Bedroom",
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
      {
        id: 2,
        img: "./img/card_project_2.png",
        title: "Minimal Bedroom",
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
      {
        id: 3,
        img: "./img/card_project_3.png",
        title: "Minimal Bedroom",
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
      {
        id: 4,
        img: "./img/card_project_4.png",
        title: "Minimal Bedroom",
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
      {
        id: 5,
        img: "./img/card_project_5.png",
        title: "Minimal Bedroom",
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
      {
        id: 6,
        img: "./img/card_project_6.png",
        title: "Minimal Bedroom",
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
      {
        id: 7,
        img: "./img/card_project_7.png",
        title: "Minimal Bedroom",
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
      {
        id: 8,
        img: "./img/card_project_8.png",
        title: "Minimal Bedroom",
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
      {
        id: 9,
        img: "./img/card_project_2.png",
        title: "Minimal Bedroom",
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
      {
        id: 10,
        img: "./img/card_project_4.png",
        title: "Minimal Bedroom",
        class: "Decor / Artchitecture",
        name: "Bed Room",
        like: false,
      },
    ],
    currentTag: "",
    currentPagesArray: [],
    currentChoice: "",
    size: 6,
    currentPage: 1,
  },
  getters: {
    getTotalPages: (state) =>
      Math.ceil(state.currentPagesArray.length / state.size),

    cardsOnPage: (state) => {
      let result = [];
      let index = 1;
      for (
        let i = (state.currentPage - 1) * state.size;
        i < state.currentPage * state.size;
        i++
      ) {
        result.push({
          id: index,
          img: state.smallCards[i].img,
          imgDescription: state.smallCards[i].imgDescription,
          title: state.smallCards[i].title,
          date: state.smallCards[i].date,
        });
        index++;
      }
      return result;
    },

    pagesArray(state) {
      let result = [];

      for (
        let i = 1;
        i <= Math.ceil(state.currentPagesArray.length / state.size);
        i++
      ) {
        result.push({
          id: i,
          text: i < 10 ? `0${i}` : `${i}`,
        });
      }
      return result;
    },

    taggedArticles(state) {
      return state.currentTag === ""
        ? state.articles
        : state.articles.filter((x) => x.tag === state.currentTag);
    },

    selectedCards(state) {
      return state.currentChoice === ""
        ? state.projectCards
        : state.projectCards.filter((x) => x.name === state.currentChoice) ??
            [];
    },

    cardArrOnPage(state, getters) {
      let result = [];
      let start = (state.currentPage - 1) * state.size;
      let end =
        state.currentPage * state.size > getters.selectedCards.length
          ? getters.selectedCards.length
          : state.currentPage * state.size;

      for (let i = start; i < end; i++) {
        result.push({
          id: getters.selectedCards[i].id,
          img: getters.selectedCards[i].img,
          title: getters.selectedCards[i].title,
          class: getters.selectedCards[i].class,
          like: getters.selectedCards[i].like,
        });
      }
      return result;
    },
  },
  mutations: {
    LOAD_BLOG_PAGINATION(state) {
      state.currentPagesArray = state.smallCards;
      state.currentPage = 1;
      state.size = 6;
    },

    LOAD_PROJECT_PAGINATION(state) {
      state.currentPagesArray = state.articles;
      state.currentPage = 1;
      state.size = 8;
    },

    PAGE_UP(state) {
      state.currentPage++;
    },

    PAGE_DOWN(state) {
      state.currentPage--;
    },

    PAGE_SET(state, num) {
      state.currentPage = num;
    },

    CHECK_TAG(state, id) {
      state.tags.forEach((x) => {
        x.check = x.id === id;
      });
      state.currentTag = state.tags.find((x) => x.check === true).tagName;
    },

    CHANGE_SWITCHER(state, item) {
      state.projectSwitcher.forEach((x) => {
        x.enabled = x.id === item.id;
        state.currentChoice = item.name;
      });
    },

    LIKE(state, data) {
      state.projectCards.forEach((x) => {
        x.like = x.id === data.id ? data.like : x.like;
      });
    },
  },
  actions: {},
  modules: {},
});
