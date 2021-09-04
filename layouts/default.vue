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
  font-family: 'Ubuntu', sans-serif;
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
  transition: all 300ms ease-in-out;
  &:hover,
  &:active {
    color: $purple;
    text-decoration: initial;
  }
}
button {
  cursor: pointer;
}
h1 {
  text-align: center;
  margin-bottom: 5.2rem;
  font-size: 2.8rem;
  line-height: 3.2rem;
  font-weight: 500;
  @include mq('md') {
    font-size: 3.6rem;
    line-height: 4.2rem;
  }
}
p {
  font-size: 1.4rem;
  line-height: 3.2rem;
  @include mq('md') {
    font-size: 1.8rem;
  }
  @include mq('lg') {
    font-size: 2.1rem;
    line-height: 4rem;
  }
}

.container {
  max-width: 84rem;
  width: 100%;
  margin: 0 auto;
}
.text-center {
  text-align: center;
}
.btn {
  margin-top: 5.2rem;
  margin-top: 2.6rem;
  background: $dark;
  color: $light;
  padding: 1.6rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  border: none;
  text-transform: uppercase;
  border-radius: 3.6rem;
  max-width: 26.4rem;
  width: 100%;
  margin-bottom: 2.6rem;
  &:hover {
    background: $purple;
  }
}
footer {
  font-size: 1.8rem;
  line-height: 2.1rem;
  margin-top: 5.2rem;
  margin-bottom: 5.2rem;
  a {
    margin: 0 1.3rem;
    font-size: 1.4rem;
    line-height: 3.2rem;
    @include mq('md') {
      font-size: 1.8rem;
    }
  }
}
</style>
