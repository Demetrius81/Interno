<template>
  <div class="card">
    <img :src="card.img" :alt="card.title" />
    <button
      class="star"
      v-bind:class="{ selected: card.like, notselected: !card.like }"
      @click="like"
    >
      <svg
        width="31"
        height="30"
        viewBox="0 0 31 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Star">
          <path
            id="Star 3"
            d="M13.4162 5.8541C14.0149 4.01148 16.6218 4.01148 17.2205 5.8541L18.237 8.98278C18.5048 9.80682 19.2727 10.3647 20.1392 10.3647H23.4288C25.3663 10.3647 26.1718 12.844 24.6044 13.9828L21.943 15.9164C21.242 16.4257 20.9487 17.3284 21.2165 18.1525L22.233 21.2812C22.8317 23.1238 20.7228 24.656 19.1553 23.5172L16.4939 21.5836C15.793 21.0743 14.8438 21.0743 14.1428 21.5836L11.4814 23.5172C9.91395 24.656 7.80499 23.1238 8.40369 21.2812L9.42026 18.1525C9.68801 17.3284 9.39469 16.4257 8.69372 15.9164L6.03231 13.9828C4.46488 12.844 5.27043 10.3647 7.20788 10.3647H10.4976C11.364 10.3647 12.1319 9.80682 12.3997 8.98278L13.4162 5.8541Z"
            fill="#FFA928"
          />
        </g>
      </svg>
    </button>
    <div class="card__box">
      <div class="card__text-box">
        <h3 class="card__text-box_header">{{ card.title }}</h3>
        <p class="card__text-box_text">{{ card.class }}</p>
      </div>
      <button-component></button-component>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import ButtonComponent from "./ButtonComponent.vue";
export default {
  components: { ButtonComponent },
  name: "ProjectCardComponent",

  props: {
    card: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },

  methods: {
    ...mapMutations(["LIKE"]),
    like() {
      this.LIKE({
        id: this.card.id,
        like: !this.card.like,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";

.card {
  width: 585px;
  display: flex;
  justify-content: center;
  flex-flow: column;
  gap: 28px;
  position: relative;

  &__box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row;
  }

  &__text-box {
    display: flex;
    flex-flow: column;

    &_header {
      color: $colorTextBasic;
      font-size: 25px;
      font-family: DM Serif Display;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 0.5px;
    }

    &_text {
      color: $colorTextLight;
      font-size: 22px;
      font-family: Jost;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.22px;
    }
  }
}

.star {
  background: none;
  position: absolute;
  display: block;
  top: 20px;
  right: 20px;
  padding: 0;
  margin: 0;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: none;

  //   & svg g path {
  //     fill: aliceblue;
  //   }
}

.notselected svg g path {
  fill: aliceblue;
}
.selected svg g path {
  fill: "#FFA928";
}
</style>
