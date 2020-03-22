<template lang="pug">
  .sidebar-item
    h2 On this page
    div.headings
      //- div {{headings}}
      div(v-for="title in headings"
          v-bind:key="title.anchor"
          :class="'indent-' + title.depth"
      ).link
        a(:href="title.anchor") {{title.value}}

      div(@click='scrollToTop()').button-to-top Back to top

</template>

<script>
export default {
  data: () => {
    return {
      headings: []
    };
  },
  mounted() {
    this.setTOC();
  },
  watch: {
    $route(to, from) {
      this.setTOC();
    }
  },
  methods: {
    setTOC() {
      this.headings = this.$page.sub.headings;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 1.4em;
}

.link {
  & a:hover {
    text-decoration: underline;
  }

  &.indent-2 {
    font-weight: bold;
  }
  &.indent-3 {
    margin-left: 1em;
  }
  &.indent-4 {
    margin-left: 2em;
  }
  &.indent-5 {
    margin-left: 3em;
  }
}

.button-to-top {
  margin-top: var(--main-padding);
}

a {
  color: unset;
  text-decoration: unset;
}
</style>