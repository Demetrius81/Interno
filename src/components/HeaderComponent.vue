<template>
  <header class="header center">
    <logo-component></logo-component>
    <div class="header__links">
      <a
        class="header__links_link"
        v-for="link in links"
        :key="link.id"
        :href="link.url"
        >{{ link.name }}</a
      >
    </div>
  </header>
</template>

<script>
import LogoComponent from "./LogoComponent.vue";
export default {
  components: { LogoComponent },
  name: "HeaderComponent",

  data() {
    return {
      links: [
        {
          name: "Home",
          url: "index.html",
        },
        {
          name: "Project",
          url: "project.html",
        },
        {
          name: "Blog",
          url: "blog.html",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";
.header {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 61px;
  padding-bottom: 57px;
  z-index: 1;

  &__links {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 40px;

    &_link {
      font-family: "Jost";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 125%;
      display: flex;
      align-items: center;
      text-align: center;
      color: $colorTextBasic;
    }
  }
}
</style>
