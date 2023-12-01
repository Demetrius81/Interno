<template>
  <div class="content center">
    <project-switcher-component></project-switcher-component>
    <div class="cards" v-if="selectedCards.length > 0">
      <project-card-component
        class="card"
        v-for="item in cardArrOnPage"
        :key="item.id"
        :card="item"
      >
      </project-card-component>
    </div>
    <div class="cards_no-content" v-if="selectedCards.length === 0">
      Sorry, <br />
      we do not have materials on the selected topic
    </div>
    <pagination-component
      v-show="selectedCards.length > 0"
    ></pagination-component>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import PaginationComponent from "./PaginationComponent.vue";
import ProjectCardComponent from "./ProjectCardComponent.vue";
import ProjectSwitcherComponent from "./ProjectSwitcherComponent.vue";
export default {
  components: {
    PaginationComponent,
    ProjectCardComponent,
    ProjectSwitcherComponent,
  },

  name: "ProjectContentComponent",

  methods: {
    moveToDetails(title) {
      //   window.location.href = "blog_details.html";
      console.log(title);
    },
  },
  computed: {
    ...mapState(["projectSwitcher", "currentChoice", "currentPage", "size"]),
    ...mapGetters(["selectedCards", "cardArrOnPage"]),
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
</style>
