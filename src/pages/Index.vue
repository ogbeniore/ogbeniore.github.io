<template>
  <Layout>
    <div class="about">
      <div class="about__content">
        <h1 class="about__content__header">Hi, I'm <span class="text-accent">Oreoluwa</span></h1>
        <p class="about__content__body text-white">
          I am a Software engineer currently at 
          <a href="https://enyata.com" target="_blank" rel="noopener"  class="text-accent">Enyata</a>.
          Most of the time i work on consumer facing part of a software software using tools like CSS, 
          Javascript, Vue and React, and in a situation where i want to build the non consumer facing 
          part i use tools like Node.js.
        </p>
      </div>
    </div>
    <Navigation light="true" />
  </Layout>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    Navigation
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
.about {
  background: $main-color;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  &:before,
  &:after {
    position: absolute;
    top: 0;
    content: '';
    width: 50%;
    height: 100%;
    max-width: 240px;
    background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M9 0H11V20H9V0ZM34.134 0.839746L35.866 1.83975L25.866 19.1603L24.134 18.1603L34.134 0.839746ZM14.134 20.8397L15.866 21.8397L5.86603 39.1603L4.13397 38.1603L14.134 20.8397ZM58.1603 4.13397L59.1603 5.86603L41.8397 15.866L40.8397 14.134L58.1603 4.13397ZM18.1603 44.134L19.1603 45.866L1.83975 55.866L0.839746 54.134L18.1603 44.134ZM80 9V11H60V9H80ZM20 69V71H0V69H20ZM99.3205 14L98.3205 15.7321L81 5.73205L82 4L99.3205 14ZM19.3205 94L18.3205 95.732L1 85.732L2 84L19.3205 94ZM115.866 18.1603L114.134 19.1603L104.134 1.83975L105.866 0.839746L115.866 18.1603ZM15.866 118.16L14.134 119.16L4.13397 101.84L5.86603 100.84L15.866 118.16ZM38.1603 24.134L39.1603 25.866L21.8397 35.866L20.8397 34.134L38.1603 24.134ZM60 29V31H40V29H60ZM79.3205 34L78.3205 35.7321L61 25.732L62 24L79.3205 34ZM95.866 38.1603L94.134 39.1603L84.134 21.8397L85.866 20.8397L95.866 38.1603ZM111 40H109V20H111V40ZM114.134 40.8397L115.866 41.8397L105.866 59.1603L104.134 58.1603L114.134 40.8397ZM40 49V51H20V49H40ZM59.3205 54L58.3205 55.7321L41 45.7321L42 44L59.3205 54ZM75.866 58.1603L74.134 59.1603L64.134 41.8397L65.866 40.8397L75.866 58.1603ZM91 60H89V40H91V60ZM94.134 60.8397L95.866 61.8397L85.866 79.1603L84.134 78.1603L94.134 60.8397ZM118.16 64.134L119.16 65.866L101.84 75.866L100.84 74.134L118.16 64.134ZM39.3205 74L38.3205 75.732L21 65.732L22 64L39.3205 74ZM55.866 78.1603L54.134 79.1603L44.134 61.8397L45.866 60.8397L55.866 78.1603ZM71 80H69V60H71V80ZM74.134 80.8397L75.866 81.8397L65.866 99.1603L64.134 98.1603L74.134 80.8397ZM98.1603 84.134L99.1603 85.866L81.8397 95.866L80.8397 94.134L98.1603 84.134ZM120 89V91H100V89H120ZM35.866 98.1603L34.134 99.1603L24.134 81.8397L25.866 80.8397L35.866 98.1603ZM51 100H49V80H51V100ZM54.134 100.84L55.866 101.84L45.866 119.16L44.134 118.16L54.134 100.84ZM78.1603 104.134L79.1603 105.866L61.8397 115.866L60.8397 114.134L78.1603 104.134ZM100 109V111H80V109H100ZM119.321 114L118.321 115.732L101 105.732L102 104L119.321 114ZM31 120H29V100H31V120Z' fill='%23CCFFDD' fill-opacity='0.2'/%3E%3C/svg%3E%0A");
    animation: slide 5000ms linear;
    @keyframes slide {
      from { 
        background-position: 0 0;
      }
      to {
        background-position: -400px 0;
      }
    }
    @media screen and (max-width: 600px) {
      animation: none;
      opacity: 0.3
    }
  }
  &:before {
    left: 0;
  }
  &:after {
    right: 0;
    animation-direction: reverse;
    @media screen and (max-width: 600px) {
      animation-direction: normal;
    }
  }
  &__content {
    max-width: 800px;
    width: 100%;
    height: 100%;
    margin: auto;
    text-align: center;
    &__header {
      color: $white;
      margin-top: 0.5rem;
    }
    &__body {
      font-size: 3rem;
      padding: 0 2rem;
      opacity: 0;
      animation-duration: 1000ms;
      animation-name: slideup;
      animation-timing-function: ease-in;
      animation-play-state: running;
      animation-delay: 500ms;
      animation-fill-mode: forwards;
    }
  }
}
a.text-accent {
  position: relative;
  &:after {
    content: '';
    height: 0.4rem;
    width: 0%;
    background: $accent-color;
    position: absolute;
    bottom: -20%;
    left: 0;
    border-radius: 1rem;
    transition: width 300ms ease-in-out;
  }
  &:hover {
    &:after {
      width: 100%;
    }
  }
}
</style>
