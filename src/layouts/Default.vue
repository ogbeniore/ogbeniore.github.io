<template>
  <div class="layout">
    <slot/>
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
html {
  font-size: 10px;
}
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Squad",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}
p {
	font-weight: 300;
	font-size: 1.5rem;
}
h1 {
	font-size: 3rem;
} 
h2 {
	font-size: 2.5rem;
}
h3 {
	font-size: 2.255rem;
}
h4 {
	font-size: 2rem;
}
h5 {
	font-size: 1.75rem;
}
h6 {
	font-size: 1.5rem;
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

</style>
