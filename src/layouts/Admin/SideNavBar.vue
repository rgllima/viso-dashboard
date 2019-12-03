<template>
  <div class="side-nav-bar">
    <div class="tile is-child side-nav-bar__figure">
      <img class="side-nav-bar__logo" src="../../assets/logo.png" alt="Viso Logo" />
    </div>

    <div class="tile is-child side-nav-bar__navigation">
      <button
        class="button"
        :class="{'is-primary' : `/${currentPath.split('/')[1]}` === nav.path }"
        v-for="(nav, i) in navs"
        :key="i"
        @click="pushRoute(nav.path)"
      >{{nav.name}}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPath: {
      type: String,
      required: true
    }
  },

  data() {
    return {
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
          path: "/sheets"
        },
        {
          name: "Ajuda",
          path: "/help"
        }
      ]
    };
  },

  methods: {
    pushRoute(path) {
      console.log(path, this.currentPath);
      if (path !== `/${this.currentPath.split("/")[1]}`)
        this.$router.push(path);
    }
  }
};
</script>

<style lang="sass">
@import "../../assets/css/variables"

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
</style>