<template>
  <div>
    <div class="slider" v-if="sliderState.length > 0">
      <div
        class="slider_image"
        v-for="item in sliderState"
        :key="item.id"
        v-show="item.show"
      >
        <img :src="item.src" :alt="item.alt" />
      </div>

      <div class="slider__button-box">
        <div v-for="item in sliderState" :key="item.id">
          <input
            class="slider__button-box_custom-radio"
            type="radio"
            :id="item.id"
            name="select"
            @change="setSlide(item.id)"
          />
          <label :for="item.id"></label>
        </div>
      </div>
    </div>
    <div class="no-content" v-if="sliderState.length === 0">
      There is no pictures to show.
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "SliderComponent",
  methods: {
    ...mapMutations(["CALCULATE_SLIDER_DATA", "SET_SLIDE_TO_SHOW"]),
    setSlide(id) {
      this.SET_SLIDE_TO_SHOW(id);
    },
  },
  computed: {
    ...mapState(["sliderState"]),
  },
  beforeMount() {
    this.CALCULATE_SLIDER_DATA();
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";

.slider {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &_image {
    width: 1201px;
    height: 799px;
    border-radius: 70px;
    background: $colorBacgroundBigCardImg;
    background-size: cover;
    overflow: hidden;

    & img {
      width: 1201px;
      height: 799px;
    }
  }

  &__button-box {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &_custom-radio {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }

    &_custom-radio + label {
      display: inline-flex;
      align-items: center;
      user-select: none;
    }

    &_custom-radio + label::before {
      content: "";
      display: inline-block;
      width: 1em;
      height: 1em;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid #adb5bd;
      border-radius: 50%;
      margin-right: 0.5em;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
    }

    &_custom-radio:not(:disabled):not(:checked) + label:hover::before {
      border-color: $colorBacgroundBtnBigCard;
    }

    &_custom-radio:not(:disabled):active + label::before {
      background-color: $colorBacgroundBtnBigCard;
      border-color: $colorBacgroundBtnBigCard;
    }

    &_custom-radio:focus + label::before {
      box-shadow: 0 0 0 0.2rem #fffb0040;
    }

    &_custom-radio:focus:not(:checked) + label::before {
      border-color: $colorBacgroundBigCardImg;
    }

    &_custom-radio:checked + label::before {
      border-color: $colorLogo;
      background-color: $colorLogo;
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
    }

    &_custom-radio:disabled + label::before {
      background-color: $colorBacgroundMain;
    }
  }
}

.no-content {
  color: $colorLogo;
  text-align: center;
  font-size: 48px;
  font-family: DM Serif Display;
  font-style: italic;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.5px;
  padding: 200px;
  border-radius: 50px;
  background: $colorBacgroundBtnBigCard;
}
</style>
