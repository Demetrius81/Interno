<template>
  <section class="large-content center">
    <div class="large-content__header">
      <h2 class="large-content__header_head">Follow Our Projects</h2>
      <p class="large-content__header_description">
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </p>
    </div>
    <div class="large-content__card-box">
      <big-card-component v-for="card in cards" :key="card.id" :carddata="card">
      </big-card-component>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import BigCardComponent from "./BigCardComponent.vue";

export default {
  components: { BigCardComponent },
  name: "LargeContentComponent",
  computed: {
    ...mapState(["cards"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";

.large-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    gap: 8px;

    &_head {
      font-family: "DM Serif Display";
      font-style: normal;
      font-weight: 400;
      font-size: 50px;
      line-height: 125%;
      display: block;
      letter-spacing: 0.02em;
      color: $colorTextBasic;
      max-width: 451px;
      padding-top: 96px;
    }

    &_description {
      font-family: "Jost";
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 150%;
      letter-spacing: 0.01em;
      color: $colorTextLight;
      width: 737px;
      padding-bottom: 93px;
    }
  }

  &__card-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    gap: 60px 102px;
  }
}

.big-card {
  width: $widthBigCard;
  height: $heightBigCard;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: column;

  &__img {
    overflow: hidden;
    width: $widthBigCardPicture;
    height: $heightBigCardPicture;
    background: $colorBacgroundBigCardImg;
    border-radius: 0px 80px 0px 0px;
  }
  &__box-content {
    width: $widthBigCard;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column;
    &_header {
      font-family: "DM Serif Display";
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 125%;
      display: flex;
      align-items: center;
      letter-spacing: 0.02em;

      color: $colorTextBasic;
    }
    &_text {
      font-family: "Jost";
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 150%;
      display: flex;
      align-items: center;
      letter-spacing: 0.01em;

      color: $colorTextLight;
    }
  }
  &__button {
    width: 70px;
    height: 70px;
    border-radius: 35px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $colorBacgroundBtnBigCard;
  }

  &__button svg {
    width: 10px;
    height: 20px;
  }

  &__button svg path {
    stroke: $colorTextBasic;
  }
}
</style>
