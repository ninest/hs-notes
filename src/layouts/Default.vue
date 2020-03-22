<template lang='pug'>
  Root
    div(v-if="!hideNavbar")
      Navbar
    main
      article
        slot
      div 
        h2 contents
</template>

<script>
import Root from "./Root.vue";
import Navbar from "../components/Navbar.vue";

export default {
  components: { Root, Navbar },
  props: ["hideNavbar"]
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
main {
  padding: var(--page-padding);
  padding-top: 0;

  display: grid;
  grid-template-columns: 40% 60%;
}
</style>
