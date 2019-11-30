<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="sass">
@import "../node_modules/@fortawesome/fontawesome-free/css/all.css"
@import "./assets/css/_general"

@font-face
  src: url("./assets/fonts/Bahnschrift/BAHNSCHRIFT.TTF")
  font-family: "Bahnschrift"

#app
  height: 100vh
  font-family: "Bahnschrift", sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscal
</style>
