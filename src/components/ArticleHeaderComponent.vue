<template>
  <section class="article-header center">
    <div class="article-header__box">
      <h1 class="article-header__box_title">Articles & News</h1>
      <div class="article-header__links">
        <a href="#" class="article-header__links_text">Home</a>
        <p class="article-header__links_text">/</p>
        <a href="#" class="article-header__links_text">Blog</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ArticleHeaderComponent",
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";

.article-header {
  margin-bottom: 200px;
  height: 356px;
  background: url("../../public/img/header__font.jpg");
  width: 100%;
  height: 356px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  &__box {
    width: 503px;
    height: 178px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    background: $colorBacgroundMain;
    border-radius: 37px 37px 0px 0px;

    &_title {
      font-family: "DM Serif Display";
      font-style: normal;
      font-weight: 400;
      font-size: 50px;
      line-height: 125%;
      display: flex;
      align-items: center;
      color: $colorTextBasic;
    }
  }

  &__links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &_text {
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
}
</style>
