<template>
  <nav class="navigation" :class="{light: light, half: half}">
    <ul class="navigation__list">
      <li class="navigation__list__item">
        <g-link to="/" active-class="active" exact>About me</g-link>
      </li>
      <li class="navigation__list__item">
        <g-link to="/projects" active-class="active">Projects</g-link>
      </li>
      <li class="navigation__list__item">
        <g-link to="/contact" active-class="active">Talk to me</g-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['light', 'half']
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
.navigation {
  position: absolute;
  bottom: 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 2;
  opacity: 0;
  animation-duration: 1000ms;
  animation-name: slideup;
  animation-timing-function: ease-in;
  animation-delay: 2000ms;
  animation-fill-mode: forwards;
  &__list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    &__item {
      color: $main-color-faded;
      padding: 1rem 2rem;
      font-size: 2rem;
      @media screen and (max-width: 600px) {
        font-size: 2.5rem;
      }
      a {
        position: relative;
        transition: color 300ms ease-in-out;
        padding-bottom: 1rem;
        &:after {
          content: '';
          height: 0.5rem;
          width: 100%;
          background: $main-color-faded;
          position: absolute;
          bottom: 0;
          left: 0;
          border-radius: 1rem;
          transition: background-color 300ms ease-in-out;

        }
        &.active,
        &:hover {
          color: $main-color;
          &:after {
            background-color: $main-color;
          }
          &:hover {
            color: $accent-color;
            &:after {
              transition: height 300ms ease-in-out;
              height: 4rem;
              width: 120%;
              left: -10%;
              z-index: -1;
              border-radius: 0;
            }
          }
        }
      }
    }
  }
  &.light {
    .navigation__list__item {
      color: $accent-color-faded;
      a {
        &:after {
          background: $accent-color-faded;
        }
        &.active,
        &:hover {
          color: $accent-color;
          &:after {
            background-color: $accent-color;
          }
          &:hover {
            color: $main-color;
          }
        }
      }
    }
  }
  @media screen and (min-width: 600px) {
    &.half {
      .navigation__list__item {
        &:first-of-type {
          color: $accent-color-faded;
          a {
            &:after {
              background: $accent-color-faded;
            }
            &:hover {
              color: $accent-color;
              &:after {
                background-color: $accent-color;
              }
              &:hover {
                color: $main-color;
              }
            }
          }
        }
        &:nth-of-type(2) {
          display: none;
        }
      }
    }
  }
}
</style>