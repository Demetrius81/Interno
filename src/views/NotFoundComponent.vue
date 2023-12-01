<template>
  <div class="box">
    <div class="box__content">
      <p class="box__content_header">404</p>
      <p class="box__content_text">
        We are sorry, but the page you requested was not found
      </p>

      <button class="box__content_btn" @click="moveToHome">
        Back To Home
        <span>
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
              stroke="#CDA274"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </button>
    </div>
    <div class="box__image">
      <img src="../../public/img/404.png" alt="Page not found" />
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFoundComponent",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    moveToHome() {
      this.$router.push({ name: "main" });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";

.box {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 81px;

  &__content {
    &_header {
      color: $colorLogo;
      font-family: "DM Serif Display";
      font-size: 250px;
      font-style: normal;
      font-weight: 400;
      line-height: 125%;
      margin-top: -60px;
      margin-bottom: -60px;
    }
    &_text {
      width: 569px;
      height: 139px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #292f36;
      font-family: DM Serif Display;
      font-size: 35px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      letter-spacing: 0.35px;
      padding-bottom: 23px;
    }
    &_btn {
      padding: 26px 54px;
      border-radius: 18px;
      background: $colorTextBasic;
      box-shadow: 0px 10px 20px 0px #c0c0c059;
      color: $colorBacgroundMain;
      text-align: center;
      font-family: "Jost";
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 125%;
      letter-spacing: 0.36px;

      & span {
        padding-left: 9px;
        align-self: center;
      }
    }
  }

  &__image {
    border-radius: 0px 0px 0px 353px;
    background: #ebebeb;
    overflow: hidden;
  }
}
</style>
