<template>
  <section class="greetings center">
    <div class="greetings__box">
      <div class="greetings__content">
        <h1 class="greetings__content_header">Let Your Home Be Unique</h1>
        <p class="greetings__content_text">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </p>
        <button class="greetings__button" @click="moveToProject">
          <div class="greetings__button_text">
            <p>Get Started</p>
          </div>
          <div class="greetings__button_arrow">
            <svg
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GreetingsComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    moveToProject() {
      this.$router.push({ name: "project" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";
.greetings {
  &__box {
    width: 1200px;
    height: 758px;
    background: url("../../public/img/greetings__photo.png");
    background-size: contain;
    border-radius: 70px;
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: start;
    flex-flow: column wrap;
    gap: 19px;
    padding-left: 52px;
    padding-top: 208px;

    &_header {
      max-width: 433px;
      font-family: "DM Serif Display";
      font-style: normal;
      font-weight: 400;
      font-size: 65px;
      line-height: 125%;
      display: flex;
      align-items: center;
      color: $colorTextBasic;
    }

    &_text {
      max-width: 433px;
      color: $colorTextLight;
      font-family: "Jost";
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 150%;
      display: flex;
      align-items: center;
      letter-spacing: 0.01em;
      margin-bottom: 3px;
    }
  }
  &__button {
    width: 220.14px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row nowrap;
    gap: 10px;
    background: $colorTextBasic;
    border-radius: 18px;
    box-shadow: 0px 10px 20px #c0c0c059;
    border: none;

    &_text {
      font-family: "Jost";
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 125%;
      display: flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.02em;
      color: $colorBacgroundMain;
    }

    &:hover {
      color: $colorBacgroundLines;
      background: $colorTextLight;
    }
  }

  &__button_arrow svg {
    width: 19px;
    height: 17px;
  }

  &__button_arrow svg path {
    stroke: $colorLogo;
  }
}
</style>
