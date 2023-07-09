<template>
  <div class="pd-content center">
    <div class="pd-content__description">
      <h2 class="pd-content__description_header">
        {{ projectCardsDetails.header }}
      </h2>
      <p class="pd-content__description_text">
        {{ projectCardsDetails.content }}
      </p>
    </div>
    <!-- <div class="pd-content__slider">
      <div
        class="pd-content__slider_image"
        v-for="item in getSlides"
        :key="item.id"
        v-show="item.show"
      >
        <img :src="item.src" :alt="item.alt" />
      </div>

      <div class="pd-content__slider_button-box">
        <input
          type="radio"
          :id="item.id"
          name="select"
          v-for="item in getSlides"
          :key="item.id"
        />
        {{ item }}
      </div>
    </div> -->
    <slider-component></slider-component>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SliderComponent from "./SliderComponent.vue";
export default {
  components: { SliderComponent },
  name: "ProjectDetailsContentComponent",

  data() {
    return {};
  },

  beforeMount() {},

  methods: {},

  computed: {
    ...mapState(["projectCardsDetails"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";

.pd-content {
  margin-bottom: 150px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 100px;

  &__description {
    width: 658px;
    display: flex;
    flex-flow: column;
    align-items: start;
    justify-content: center;
    gap: 11px;

    &_header {
      color: $colorTextBasic;
      font-family: DM Serif Display;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      letter-spacing: 1px;
    }

    &_text {
      text-align: justify;
      color: $colorTextLight;
      font-family: Jost;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.22px;
    }
  }

  //   &__slider {
  //     display: flex;
  //     flex-flow: column;
  //     justify-content: center;
  //     align-items: center;
  //     gap: 20px;

  //     &_image {
  //       border-radius: 70px;
  //       background: $colorBacgroundBigCardImg;
  //       background-size: cover;
  //       overflow: hidden;
  //     }

  //     &_button-box {
  //       display: flex;
  //       flex-flow: row;
  //       justify-content: center;
  //       align-items: center;
  //       gap: 10px;

  //       & button {
  //         width: 10px;
  //         height: 10px;
  //         border-radius: 5px;
  //         background: none;
  //       }
  //     }
  //   }
}
</style>
