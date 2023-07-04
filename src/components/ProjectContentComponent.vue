<template>
  <div class="content center">
    <div class="switcher">
      <button
        class="switcher__btn"
        v-bind:class="{ switcher__checked: item.enabled }"
        v-for="item in projectSwitcher"
        :key="item.id"
        @click="changeSwitcher(item)"
      >
        {{ item.name }}
      </button>
    </div>
    <div class="cards" v-if="selectedCards.length > 0">
      <project-card-component
        class="card"
        v-for="item in cardsOnPage"
        :key="item.id"
        :card="item"
        @like="like"
      >
      </project-card-component>
    </div>
    <div class="cards_no-content" v-if="selectedCards.length === 0">
      Sorry, <br />
      we do not have materials on the selected topic
    </div>
    <pagination-component
      :startPage="currentPage"
      :totalPages="totalPages"
      @currentPageChanged="currentPageChanged"
    ></pagination-component>
  </div>
</template>

<script>
import PaginationComponent from "./PaginationComponent.vue";
import ProjectCardComponent from "./ProjectCardComponent.vue";
export default {
  components: { PaginationComponent, ProjectCardComponent },

  name: "ProjectContentComponent",

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
      size: 8,
      currentPage: 1,
      currentChoice: "",
    };
  },

  mounted() {},

  methods: {
    moveToDetails(title) {
      //   window.location.href = "blog_details.html";
      console.log(title);
    },
    currentPageChanged(data) {
      this.currentPage = data;
    },
    changeSwitcher(item) {
      this.projectSwitcher.forEach((x) => {
        x.enabled = x.id === item.id;
        this.currentChoice = item.name;
      });

      this.$emit("changePic", item.id);
    },
    like(data) {
      this.selectedCards.forEach((x) => {
        x.like = x.id === data.id ? data.like : x.like;
      });
    },
  },
  computed: {
    totalPages() {
      return Math.ceil(this.selectedCards.length / this.size);
    },

    cardsOnPage() {
      let result = [];
      let index = 1;
      let start = (this.currentPage - 1) * this.size;
      let end =
        this.currentPage * this.size > this.selectedCards.length
          ? this.selectedCards.length
          : this.currentPage * this.size;

      for (let i = start; i < end; i++) {
        result.push({
          id: index,
          img: this.selectedCards[i].img,
          title: this.selectedCards[i].title,
          class: this.selectedCards[i].class,
          like: this.selectedCards[i].like,
        });
        index++;
      }
      return result;
    },
    selectedCards() {
      return this.currentChoice === ""
        ? this.cards
        : this.cards.filter((x) => x.name === this.currentChoice) ?? [];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";

.content {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 200px;
  gap: 61px;
}

.cards {
  width: 1200px;
  max-height: 3800px;
  display: flex;
  flex-flow: column wrap;
  gap: 30px;

  &_no-content {
    color: $colorLogo;
    text-align: center;
    font-size: 48px;
    font-family: DM Serif Display;
    font-style: italic;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
    padding: 200px;
    border-radius: 50px;
    background: $colorBacgroundBtnBigCard;
  }
}

.switcher {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  border: 1px $colorLogo solid;
  border-radius: 18px;
  padding: 0;
  margin: 0;

  &__btn {
    padding: 26px 66px;
    border: none;
    background: $colorBacgroundMain;
    border-radius: 18px;
  }

  &__checked {
    border-radius: 18px;
    background: $colorLogo;
  }
}
</style>
