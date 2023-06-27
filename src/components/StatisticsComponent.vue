<template>
  <section class="statistics">
    <div class="statistics__box center">
      <div class="statistics__item first">
        <h1 class="statistics__item_header">12</h1>
        <p class="statistics__item_description">Years Of Experiance</p>
      </div>
      <div class="statistics__item">
        <h1 class="statistics__item_header">85</h1>
        <p class="statistics__item_description">Success Project</p>
      </div>
      <div class="statistics__item">
        <h1 class="statistics__item_header">15</h1>
        <p class="statistics__item_description">Active Project</p>
      </div>
      <div class="statistics__item">
        <h1 class="statistics__item_header">95</h1>
        <p class="statistics__item_description">Happy Customers</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "StatisticsComponent",

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
.statistics {
  background: $colorBacgroundBtnBigCard;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 151px;
  padding-bottom: 151px;
  margin-top: 101px;
  margin-bottom: 96px;
  &__box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
  }

  &__item {
    position: relative;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    gap: 16px;
    &_header {
      font-family: "DM Serif Display";
      font-style: normal;
      font-weight: 400;
      font-size: 85px;
      line-height: 125%;
      display: flex;
      align-items: center;
      letter-spacing: 0.02em;
      color: $colorLogo;
    }

    &_description {
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

  &__item:not(.first)::before {
    content: "";
    position: absolute;
    width: 0px;
    height: 130px;
    left: 0;
    top: calc(50% - 65px);
    border: 1px solid $colorLogo;
  }
}
</style>
