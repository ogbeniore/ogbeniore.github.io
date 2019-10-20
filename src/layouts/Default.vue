<template>
  <div class="layout">
    <transition name="fade" appear>
        <main>
          <slot />
        </main>
    </transition>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@font-face {
    font-family: Squad;
    src: url('../assets/fonts/SquadaOne.ttf');
    font-weight: normal;
}
* {
  box-sizing: border-box;
}
html {
  font-size: 10px;
}
body {
  font-family: "Squad",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  background: #091a28;
}
h1 {
	font-size: 5rem;
} 
a,
a:hover,
a:visited,
a:active {
  text-decoration: none;
  color: inherit;
}
button,
button:focus,
button:focus-within {
  outline: 0;
}
.fade-enter-active {
  transition: transform .5s;
}

.fade-enter {
  transform: translateY(100%);
}
.fade-leave-active {
  transition: transform .5s;
}

.fade-leave {
  transform: translateY(-100%);
}
@media screen and (max-width: 768px) {
  html {
    font-size: 6px;
  }
}
</style>
