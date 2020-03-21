<template lang="pug">
  div
    h2 More in {{subject}}
    .button-list 
      g-link(v-for="page in similar" 
            v-bind:key="page.link"
            :to="subjectLink + '/' + page.link"
      ).page-button {{ page.title }}

</template>

<script>
import subLinks from "../data/sub-links.yaml"

export default {
  props: ["subject", "links"],
  data: () => {
    return {
      similar: [],

      // slugified subject
      subjectLink: ''
    };
  },
  mounted() {
    this.similar = subLinks.filter(sub => sub.sub == this.subject)[0].items
    this.subjectLink = subLinks.filter(sub => sub.sub == this.subject)[0].link
  }
};
</script>


<static-query>
query {
  sim: allSubPage {
    edges {
      node {
        title
        path
        fileInfo {
          directory
        }
      }
    }
  }
}
</static-query>

<style lang="scss" scoped>
@import "../assets/styles/list.scss";
</style>