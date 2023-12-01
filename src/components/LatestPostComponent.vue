<template>
  <section class="latest-post center">
    <div class="latest-post__box">
      <div class="latest-post_img">
        <img src="../../public/img/latest-post__Photo.png" alt="Latest Post" />
      </div>
      <div class="latest-post__textbox">
        <h4 class="latest-post__textbox_title">
          Low Cost Latest Invented Interior Designing Ideas
        </h4>
        <p class="latest-post__textbox_text">
          Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
          dignissim maximus.posuere in.Contrary to popular belief.
        </p>
        <p class="latest-post__textbox_text">
          Lorem Ipsum is not simply random text. It has roots in a piece of
          classica.
        </p>
        <div class="latest-post__buttobbox">
          <p class="latest-post__buttobbox_text">26 December,2022</p>
          <button
            class="latest-post__buttobbox_button"
            @click="moveToDetails()"
          >
            <svg
              width="9"
              height="17"
              viewBox="0 0 9 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.77101 15.1855L7.71387 8.49983L1.77101 1.81412"
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
  </section>
</template>

<script>
export default {
  name: "LatestPostComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    moveToDetails() {
      this.$router.push({ name: "blogdetails" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";

.latest-post {
  margin-bottom: 150px;

  &__box {
    padding: 22px;
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 65px;
    border: 1px solid #e7e7e7;
    filter: drop-shadow(0px 10px 30px rgba(255, 255, 255, 0.25));
    border-radius: 62px;
  }

  &_img {
    width: 569px;
    height: 478px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $colorBacgroundBigCardImg;
    border-radius: 50px;
    overflow: hidden;
  }

  &__textbox {
    width: 489px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column;
    gap: 22px;

    &_title {
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
      letter-spacing: 0.01em;
      color: $colorTextLight;
    }
  }

  &__buttobbox {
    width: 489px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 19px;

    &_text {
      font-family: "Jost";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      display: flex;
      align-items: center;
      letter-spacing: 0.01em;
      text-transform: capitalize;
      color: $colorTextLight;
    }

    &_button {
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
        transition: all 0.3s ease;
      }
    }
  }
}
</style>
