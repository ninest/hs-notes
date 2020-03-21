<template lang='pug'>
  Layout
    h1 All subjects
    div(v-for='item in this.links' v-bind:key='item.link')
      h2 {{item.sub}}
      .button-list
        g-link(v-for='page in item.items' 
              :to="item.link + '/' + page.link"
              v-bind:key="item.link"
        ).page-button {{page.title}}
</template>

<script>
import links from "../data/sub-links.yaml";

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  data: () => {
    return {
      links: links
    };
  }
};
</script>


<style lang="scss" scoped>
@import "../assets/styles/list.scss";

h2,h3 {
  font-family: 'Poppins', var(--fallback-font);
}
</style>