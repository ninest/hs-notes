<template lang='pug'>
  Root
    div(v-if="!hideNavbar")
      Navbar
    main(v-bind:class="{ grid: rightBar }")
      article
        slot
      
      div(v-if="rightBar").sidebar
        TOC
</template>

<script>
import Root from "./Root.vue";
import Navbar from "../components/Navbar.vue";
import TOC from "../components/TOC.vue";

export default {
  components: { Root, Navbar, TOC },
  props: ["hideNavbar", "rightBar"]
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

main {
  padding: var(--page-padding);
  padding-top: 0;

  // background-color: red;

  &.grid {
    // background-color: blue;
    // width: 100%;
    display: grid;
    grid-template-columns: calc(100% - 210px) 240px;
    grid-gap: var(--dense-padding);

    @include mobile-screen {
      display: block;
    }
  }
}
</style>
