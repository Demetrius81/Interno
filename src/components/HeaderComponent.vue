<template>
  <header class="header center">
    <logo-component></logo-component>
    <div class="header__links">
      <router-link
        class="header__links_link"
        v-for="link in links"
        :key="link.id"
        :to="link.url"
        >{{ link.name }}</router-link
      >
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
import LogoComponent from "./LogoComponent.vue";
export default {
  components: { LogoComponent },
  name: "HeaderComponent",
  computed: {
    ...mapState(["links"]),
  },
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
