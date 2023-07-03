<template>
  <div class="card">
    <img :src="card.img" :alt="card.title" />
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

.card {
  width: 585px;
  display: flex;
  justify-content: center;
  flex-flow: column;
  gap: 28px;

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
</style>
