<template>
  <div class="side-nav-bar">
    <div class="tile is-child side-nav-bar__figure">
      <img class="side-nav-bar__logo" src="../assets/Logo.png" alt="Viso Logo" />
    </div>

    <div class="tile is-child side-nav-bar__navigation">
      <button
        class="button"
        :class="{'is-primary' : currentPath === nav.path }"
        v-for="(nav, i) in navs"
        :key="i"
        @click="pushRoute(nav.path)"
      >{{nav.name}}</button>
    </div>

    <div class="tile is-child side-nav-bar__banner">
      <p>Total de pessoas cadastradas no Programa Bolsa Familia</p>
      <p class="subtitle">61.180</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPath: "",
      navs: [
        {
          name: "Identificação Familiar",
          path: "/familiar"
        },
        {
          name: "Identificação Municipal",
          path: "/municipal"
        },
        {
          name: "Planilhas",
          path: "/planilhas"
        },
        {
          name: "Ajuda",
          path: "/ajuda"
        }
      ]
    };
  },

  methods: {
    pushRoute(path) {
      console.log(path)
      if (path !== this.currentPath) this.$router.push(path);
    },

    setCurrentPath(path) {
      this.currentPath = `/${path}`;
    }
  },

  watch: {
    $route() {
      this.setCurrentPath(this.$route.path.split("/")[1]);
    }
  },

  mounted() {
    this.setCurrentPath(this.$route.path.split("/")[1]);
  }
};
</script>

<style lang="sass">
@import "../assets/css/_variables"

.side-nav-bar
  padding-top: 20px
  height: 100%
  background-color: #f2f2f2
  display: flex
  flex-direction: column
  justify-content: space-between
  &__figure
    max-height: 120px
  &__logo
    width: 70%
    min-width: 100px
    max-height: auto
    margin: 0 auto
    display: block
  &__navigation
    max-height: 100%
    display: flex
    flex-direction: column
    justify-content: center
    button
      background-color: transparent
      color: $secondary
      font-size: 1.1rem
      font-weight: 600
      width: 200px
      margin: 5px auto
      border: none
  &__banner
    max-height: 100px
    text-align: center
    display: flex
    flex-direction: column
    justify-content: center
    background-color: $secondary
    p
      color: $primary
</style>