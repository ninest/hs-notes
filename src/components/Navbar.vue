<template lang="pug">
  nav
    g-link(to='/').logo Notes
    .side
      g-link(to='/about') About
      a(href='https://github.com/themindstorm') GitHub
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: var(--small-padding) var(--page-side-padding);

  // border-bottom: 2px solid rgba(0, 0, 0, 0.515);
  background-color: black;
  color: white;

  font-family: 'Poppins', var(--fallback-font);

  a {
    color: unset;
    text-decoration: none;
  }


  .logo {
    font-size: 1.3em;
    font-weight: 700;
  }
  .side {
    display: flex;

    a {
      margin-left: var(--dense-padding);

      &.active {
        font-weight: bold;
      }
    }
  }
}
</style>