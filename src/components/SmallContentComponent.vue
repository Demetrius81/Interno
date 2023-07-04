<template>
  <section class="small-content center">
    <div class="small-content__header">
      <h1 class="small-content__header_head">Articles & News</h1>
      <p class="small-content__header_text">
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </p>
    </div>
    <div class="small-content__card-box">
      <!-- <div        class="small-card"        v-for="item in smallCardBox"        :key="item.id"        v-bind:class="{ negative: checkIsNegative(item.id) }"      >
        <div class="small-card__img">
          <img v-bind:src="item.img" v-bind:alt="item.imgDescription" />
          <p class="small-card__img_description">{{ item.imgDescription }}</p>
        </div>
        <div class="small-card__content">
          <h2 class="small-card__content_header">{{ item.title }}</h2>
          <div class="small-card__date-btn-box">
            <p class="small-card__date-btn-box_text">{{ item.date }}</p>
            <button class="small-card__date-btn-box_btn">
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
      </div> -->
      <card-component
        v-for="item in cardsdata"
        :key="item.id"
        :carddata="item"
      ></card-component>
    </div>
  </section>
</template>

<script>
import CardComponent from "./CardComponent.vue";
export default {
  components: { CardComponent },
  name: "SmallContentComponent",
  props: {
    cardsdata: {
      type: Array,
      default: function () {
        return [];
      },
      required: true,
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";

.small-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  margin-bottom: 96px;

  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    gap: 12px;
    margin-bottom: 52px;
    &_head {
      font-family: "DM Serif Display";
      font-style: normal;
      font-weight: 400;
      font-size: 50px;
      line-height: 125%;
      display: block;
      letter-spacing: 0.02em;
      color: $colorTextBasic;
    }
    &_text {
      width: 811px;
      font-family: "Jost";
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 150%;
      display: block;
      letter-spacing: 0.01em;
      color: $colorTextLight;
    }
  }

  &__card-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    gap: 27px;
  }
}
</style>
