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
          v-for="tag in datatags"
          :key="tag.id"
        >
          {{ tag.tagName }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleComponent from "./ArticleComponent.vue";
export default {
  components: { ArticleComponent },
  name: "InternoDetailsComponent",
  props: {
    datatags: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
    dataarticles: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentTag: "",
    };
  },

  methods: {
    checkTag(id) {
      this.datatags.forEach((x) => {
        x.check = x.id === id;
      });
      this.currentTag = this.datatags.find((x) => x.check === true).tagName;
    },
  },

  computed: {
    taggedArticles() {
      return this.currentTag === ""
        ? this.dataarticles
        : this.dataarticles.filter((x) => x.tag === this.currentTag);
    },
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
