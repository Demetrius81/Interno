<template>
  <div class="big-card">
    <div class="big-card__img">
      <img :src="carddata.imgSrc" :alt="carddata.imgAlt" />
    </div>
    <div class="big-card__box-content">
      <div class="big-card__content">
        <h4 class="big-card__content_header">{{ carddata.header }}</h4>
        <p class="big-card__content_text">{{ carddata.text }}</p>
      </div>
      <button class="big-card__button">
        <svg
          width="10"
          height="20"
          viewBox="0 0 10 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.00012 19L9.00012 10L1.00012 1"
            stroke="#292F36"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BigCardComponent",
  props: {
    carddata: {
      type: Object,
      default: function () {
        return {
          id: 0,
          imgSrc: "",
          imgAlt: "Default",
          header: "Default",
          text: "Default",
        };
      },
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";

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
