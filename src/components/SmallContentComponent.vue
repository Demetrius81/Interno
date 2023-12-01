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
      <card-component
        v-for="item in smallCards.slice(0, 3)"
        :key="item.id"
        :carddata="item"
      ></card-component>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import CardComponent from "./CardComponent.vue";
export default {
  components: { CardComponent },
  name: "SmallContentComponent",
  computed: {
    ...mapState(["smallCards"]),
  },
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
