<template>
  <section class="content center">
    <article class="content__box">
      <article-component
        v-for="item in taggedArticles"
        :key="item.id"
        :dataarticle="item"
      ></article-component>
    </article>
    <div class="tags">
      <h1 class="tags_header">Tags</h1>
      <div class="tags__box">
        <button
          class="tags__box_btn"
          v-on:click="checkTag(tag.id)"
          v-bind:class="{ check: tag.check }"
          v-for="tag in tags"
          :key="tag.id"
        >
          {{ tag.tagName }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
import ArticleComponent from "./ArticleComponent.vue";
export default {
  components: { ArticleComponent },
  name: "InternoDetailsComponent",
  methods: {
    ...mapMutations(["CHECK_TAG"]),
    checkTag(id) {
      this.CHECK_TAG(id);
    },
  },
  computed: {
    ...mapState(["tags", "articles", "currentTag"]),
    ...mapGetters(["taggedArticles"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";

.content {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 52px;
  margin-bottom: 96px;

  &__box {
    width: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    gap: 32px;
  }

  .tags {
    width: 348px;

    &__box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-flow: row wrap;
      &_btn {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 9px 30px;
        gap: 10px;
        background: $colorBacgroundBtnBigCard;
        border-radius: 10px;
        border: none;
        font-family: "Jost";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 125%;
        letter-spacing: 0.02em;

        color: $colorTextBasic;
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
}
</style>
