<template>
  <div class="small-card" :class="{ negative: checkIsNegative(carddata.id) }">
    <div class="small-card__img">
      <img :src="carddata.img" :alt="carddata.imgDescription" />
      <p class="small-card__img_description">{{ carddata.imgDescription }}</p>
    </div>
    <div class="small-card__content">
      <h2 class="small-card__content_header">{{ carddata.title }}</h2>
      <div class="small-card__date-btn-box">
        <p class="small-card__date-btn-box_text">{{ carddata.date }}</p>
        <button class="small-card__date-btn-box_btn" @click="move()">
          <svg
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.77144 14.9527L7.71429 8.267L1.77144 1.58128"
              stroke="#292F36"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    carddata: {
      type: Object,
      default: function () {
        return {
          id: 0,
          img: "",
          imgDescription: "Default",
          title: "default",
          date: "01 January,1970 ",
        };
      },
      required: true,
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {
    checkIsNegative(id) {
      return id === 2;
    },
    move() {
      this.$router.push({ name: "blogdetails" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";

.small-card {
  width: 382px;
  height: 521px;
  padding: 20px;
  border: 1px solid $colorSmallCardBorder;
  box-shadow: 0px 10px 30px rgba(255, 255, 255, 0.25);
  border-radius: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  gap: 21px;
  background: $colorBacgroundMain;

  &__img {
    position: relative;
    overflow: hidden;
    width: 340px;
    height: 289.27px;
    background: $colorBacgroundSmallCardImg;
    border-radius: 45px 45px 0px 0px;

    &_description {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 124px;
      height: 41px;
      background: $colorBacgroundMain;
      border-radius: 8px 8px 8px 0px;
      font-family: "Jost";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0.01em;
      text-transform: capitalize;
      color: $colorTextLight;
      left: 20px;
      top: 228px;
    }
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    gap: 30px;

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
  }
  &__date-btn-box {
    width: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    &_text {
      font-family: "Jost";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      display: block;
      letter-spacing: 0.01em;
      text-transform: capitalize;

      color: $colorTextLight;
    }

    &_btn {
      height: 52px;
      width: 52px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 26px;
      border: none;
      background: $colorBacgroundBtnBigCard;

      &:hover {
        background: $colorBacgroundBtnHover;
      }
    }

    &_btn svg {
      width: 9;
      height: 16;
    }

    &_btn svg path {
      stroke: $colorTextBasic;
    }
  }
}

.negative {
  background: $colorBacgroundBtnBigCard;
  .small-card__date-btn-box {
    &_btn {
      background: $colorBacgroundMain;

      &:hover {
        background: $colorBacgroundBtnHover;
      }
    }
  }
}
</style>
