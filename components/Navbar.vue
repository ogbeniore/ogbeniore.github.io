<template>
  <nav class="nav">
    <nuxt-link class="nav-logo" to="/">
      Ogbeniore
    </nuxt-link>
    <button class="nav-button" @click="isOpen = !isOpen">
      Menu
    </button>
    <div :class="['nav__menu', isOpen && 'open']">
      <button class="nav-button --close" @click="isOpen = !isOpen">
        <svg width="43" height="44" fill="none">
          <rect
            width="5"
            height="30"
            x="8.839"
            y="13.161"
            fill="#0E0E0E"
            rx="2.5"
            transform="rotate(-45 8.839 13.161)"
          />
          <rect
            width="5"
            height="30"
            x="30.052"
            y="9.626"
            fill="#0E0E0E"
            rx="2.5"
            transform="rotate(45 30.052 9.626)"
          />
        </svg>
      </button>
      <ul>
        <li class="nav__menu-item">
          <nuxt-link to="/">
            About
          </nuxt-link>
        </li>
        <li class="nav__menu-item">
          <nuxt-link to="/projects">
            Projects
          </nuxt-link>
        </li>
        <li class="nav__menu-item">
          <a href="https://bit.ly/ogbeniore-resume" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </li>
        <li class="nav__menu-item">
          <nuxt-link to="/contact">
            Contact
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Navbar',
  data: () => ({
    isOpen: false
  }),
  watch: {
    $route () {
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/main';
.nav {
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  position: relative;
  align-items: center;
  @include mq('md') {
    padding: 3.6rem 0;
  }
  &__menu {
    visibility: hidden;
    opacity: 0;
    position: fixed;
    display: flex;
    ul {
      list-style: none;
      display: flex;
      font-size: 2.8rem;
      font-weight: 600;
      line-height: 3.2rem;
      margin-top: 5.2rem;
      transition: opacity 500ms ease-in-out;
    }
    &-item {
      margin: 2.6rem;
      @include mq('md') {
        margin: 0 1.6rem;
        &:last-child {
          margin-right: 0;
        }
        &:first-child {
          display: none;
        }
      }
    }
    &.open {
      border: 4px solid $purple;
      visibility: visible;
      opacity: 1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
      flex-direction: column;
      align-items: center;
      padding: 2.4rem;
      ul {
        text-align: center;
        flex-direction: column;
      }
    }
    @include mq('md') {
      visibility: visible;
      opacity: 1;
      position: relative;
      ul {
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 2.1rem;
        margin-top: 0;
      }
    }
  }
  &-logo {
    font-size: 1.4rem;
    line-height: 1.6rem;
    font-weight: 400;
    @include mq('md') {
      font-size: 1.8rem;
      line-height: 2.1rem;
    }
    @include mq('lg') {
      font-size: 2.4rem;
      line-height: 3.2rem;
    }
  }
  &-button {
    background: transparent;
    border: none;
    font-size: 1.4rem;
    line-height: 1.6rem;
    font-weight: 400;
    &.--close {
      align-self: flex-end;
    }
    @include mq('md') {
      display: none;
    }
  }
}
</style>
