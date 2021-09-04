<template>
  <div class="body">
    <navbar />
    <Nuxt />
  </div>
</template>

<style lang="scss">
@import '@/assets/main';
html {
  font-size: 10px;
  font-family: 'Nunito Sans', sans-serif;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background: $light;
  color: $dark;
  border: 4px solid $purple;
  min-height: 100vh;
  .body {
    padding: 0 3.6rem;
    width: 100%;
    position: relative;
    @include mq('md') {
      margin: 0 auto;
      max-width: 60rem;
      box-sizing: content-box;
    }
    @include mq('lg') {
      max-width: 120rem;
    }
  }
}
a {
  color: inherit;
  text-decoration: none;
  font-size: inherit;
  a:hover,
  a:active,
  a:visited {
    color: inherit;
    text-decoration: initial;
  }
}
button {
  cursor: pointer;
}
</style>
