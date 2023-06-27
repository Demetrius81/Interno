<template>
  <div class="article">
    <h1 class="article_header">{{ dataarticle.title }}</h1>
    <p class="article_description article_text">
      {{ dataarticle.description }}
    </p>
    <ol type="1" class="article_list">
      <li
        class="article_text"
        v-for="prop in dataarticle.listOfProperties"
        :key="prop.id"
      >
        {{ prop }}
      </li>
    </ol>
    <div class="article_img">
      <img :src="dataarticle.urlImg" :alt="dataarticle.tag" />
    </div>
    <p class="article_content article_text">{{ dataarticle.content }}</p>
    <div class="article__date-tag">
      <p class="article__date-tag_date">{{ dataarticle.date }}</p>
      <div class="article__date-tag_tag check">{{ dataarticle.tag }}</div>
    </div>
    <div class="article__div">
      <p class="article__div_large-text">“</p>
      <p class="article__div_med-text">
        The details are not the details.
        <br />
        They make the design.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleComponent",
  props: {
    dataarticle: {
      type: Object,
      required: true,
      default() {
        return {
          id: 0,
          tag: "Default",
          urlImg: "",
          title: `Default`,
          description: `Default`,
          listOfProperties: ["Default"],
          content: `Default`,
          date: "01 Januaty,1970",
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";

.article {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  gap: 32px;

  &_header {
    justify-self: start;
    font-family: "DM Serif Display";
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 125%;
    letter-spacing: 0.02em;
    color: $colorTextBasic;
  }

  &_list {
    list-style: decimal;
    padding-left: 25px;
    list-style-position: outside;

    & li {
      margin-top: 16px;
      margin-bottom: 16px;
    }

    & li::marker {
      font-family: "DM Serif Display";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 125%;
      display: flex;
      align-items: center;
      letter-spacing: 0.02em;
      color: $colorLogo;
    }
  }

  &_img {
    width: 799;
    height: 539;
    background: $colorBacgroundBigCardImg;
    border-radius: 50px;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
  }

  &__date-tag {
    width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_date {
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

  &__div {
    width: 800px;
    background: $colorBacgroundBtnBigCard;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;

    &_large-text {
      margin-top: -103px;
      font-family: "DM Serif Display";
      font-style: italic;
      font-weight: 400;
      font-size: 200px;
      line-height: 125%;
      text-align: center;
      letter-spacing: 0.02em;
      color: $colorLogo;
      transform: rotate(-180deg);
    }

    &_med-text {
      width: 355px;
      font-family: "DM Serif Display";
      font-style: italic;
      font-weight: 400;
      font-size: 25px;
      line-height: 125%;
      text-align: center;
      letter-spacing: 0.02em;
      color: $colorLogo;
      margin-bottom: 53px;
    }
  }
}

.check {
  padding: 9px 30px;
  color: $colorBacgroundMain;
  background: $colorTextBasic;
  border-radius: 10px;
  border: none;
  font-family: "Jost";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 125%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
}
</style>
