<template>
  <div class="switcher">
    <button
      class="switcher__btn"
      v-bind:class="{ switcher__checked: item.enabled }"
      v-for="item in projectSwitcher"
      :key="item.id"
      @click="changeSwitcher(item)"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "ProjectSwitcherComponent",
  methods: {
    ...mapMutations(["CHANGE_SWITCHER"]),
    changeSwitcher(item) {
      this.CHANGE_SWITCHER(item);
    },
  },
  computed: {
    ...mapState(["projectSwitcher"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/_variables.scss";
@import "@/styles/_style_default.scss";

.switcher {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  border: 1px $colorLogo solid;
  border-radius: 18px;
  padding: 0;
  margin: 0;

  &__btn {
    padding: 26px 66px;
    border: none;
    background: $colorBacgroundMain;
    border-radius: 18px;

    &:hover {
      background: $colorBacgroundBtnHover;
      transition: all 0.3s ease;
    }
  }

  &__checked {
    border-radius: 18px;
    background: $colorLogo;

    &:hover {
      background: $colorLogo;
      transition: all 0.3s ease;
    }
  }
}
</style>
