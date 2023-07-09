<template>
  <section
    class="article-header center"
    v-bind:class="{
      blog: getPic === 5,
      details: getPic === 1,
      badroom: getPic === 2,
      kitchen: getPic === 3,
      livingarea: getPic === 4,
    }"
  >
    <div class="article-header__box">
      <h1 class="article-header__box_title">{{ name.header }}</h1>
      <div class="article-header__links">
        <a href="#" class="article-header__links_text">Home</a>
        <p class="article-header__links_text">/</p>
        <a href="#" class="article-header__links_text">{{ name.pagePath }}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ArticleHeaderComponent",
  props: {
    name: {
      type: Object,
      default() {
        return {
          header: "default",
          pagePath: "default",
          id: 5,
        };
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    getPic() {
      return this.name.id;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";

.article-header {
  margin-bottom: 200px;
  height: 356px;
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

.badroom {
  background: url("../../public/img/header__badroom__font.png");
}

.details {
  background: url("../../public/img/header__details__font.png");
}

.blog {
  background: url("../../public/img/header__blog__font.jpg");
}

.kitchen {
  background: url("../../public/img/header__kitchen__font.png");
}

.livingarea {
  background: url("../../public/img/header__living_area__font.png");
}
</style>
