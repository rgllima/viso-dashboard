<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="sass">
@import "./assets/css/_general"

@font-face
  src: url("./assets/fonts/Bahnschrift/BAHNSCHRIFT.TTF")
  font-family: "Bahnschrift"

#app
  // background-image: url("./assets/identfamilia.png")
  // background-color: green
  // background-position: top bottom
  background-size: cover
  // box-sizing: content-box
  height: 100vh
  // overflow-x: hidden
  font-family: "Bahnschrift", sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscal
</style>
