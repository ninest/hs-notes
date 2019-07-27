<template lang="pug">
  div 
    .page-title IB Notes
    //- .page-subtitle.bottom-padding Notes from an alumni.
    div.grid
      nuxt-link(v-for="subject in subjects" v-bind:key="subject" :to="'/' + subject").link {{ subject }}

</template>

<script>
import { subject_pages } from '~/contents/pages.js'

export default {
  head() {
    return {
      title: "Index"
    }
  },
  data: function() {
    return {
      subjects: Object.keys(subject_pages)
    }
  }
}
</script>

<style lang="scss">
@import '~/layouts/globals.scss';

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  // @include phone-screen { 
  //   grid-template-columns: 1fr 1fr;
  // }
  grid-gap: var(--main-padding);

  .link {
    text-transform: capitalize;
    border: var(--main-border);
    padding: var(--dense-padding);
    border-radius: 10px;

    &:hover {
      // background-color: black;
      // color: white;
      transition: 0.5s all;
      // border: none;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,.12), 0 2px 4px 0 rgba(0,0,0,.08)
    }
  }
  a {
    text-decoration: unset;
    color: unset;
  }
}
</style>

