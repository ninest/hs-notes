<template lang="pug">
  g-link(:to="to")
    span.chevron &#x2039;
    slot back
</template>

<script>
export default {
  props: ["to"]
};
</script>


<style lang="scss" scoped>
a {
  display: block;

  margin-top: var(--extra-padding);
  margin-bottom: var(--main-padding);

  color: unset;
  text-decoration: unset;
  font-size: 0.8em;
  color: gray;
  display: inline-flex;
  align-items: center;

  padding: var(--small-padding) var(--dense-padding);


  .chevron {
    // font-size: 2.5em;
    font-weight: 700;
    padding-right: var(--main-padding);
    margin-bottom: 0.1em;
  }

  // negative margin so it doesn't come too down
  border: 2px solid gray;
  border-radius: calc(var(--border-radius) * 15);
  
  &:hover {
    border: 2px solid blue;
    color: blue;
  }
}
</style>