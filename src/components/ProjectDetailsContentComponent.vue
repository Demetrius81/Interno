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
}
</style>
