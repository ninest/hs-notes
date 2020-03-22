<template lang="pug">
  Layout(:hideNavbar="true")
    BackButton(to='/') subjects
    .subject-name {{ $page.sub.fileInfo.directory }}
    h1 {{ $page.sub.title }}
    VueRemarkContent.content
    More(:subject="$page.sub.fileInfo.directory", :links="$page.similarLinks")
</template>

<page-query>
query ($id: ID!) {
  sub: subPage (id: $id) {
    title
    fileInfo {
      directory
    }
  }
}
</page-query>

<script>
import Layout from "../layouts/Default.vue";

import More from "../components/More.vue";
import BackButton from "../components/BackButton.vue";

export default {
  metaInfo() {  
    return {
      title: `${this.$page.sub.title} - ${this.$page.sub.fileInfo.directory}`
    }
  },
  components: { Layout, More, BackButton }
};
</script>

<style lang="scss" scoped>
.subject-name {
  font-weight: bold;
}
h1 {
  margin-top: 0;
}
</style>