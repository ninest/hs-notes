<template lang="pug">
  div
    //- Navbar
    .wrapper
      nuxt
</template>

<script>
import Navbar from '~/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>


<style lang="scss">
@import 'main.scss';
@import 'globals.scss';
@import 'font.scss';

.wrapper {
  padding: var(--main-padding) 20%;
  
  @include phone-screen { 
    padding: var(--main-padding) 5%;
  }
}
</style>
