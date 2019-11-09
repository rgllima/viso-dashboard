<template>
  <div class="admin-layout">
    <div class="admin-layout__wrap tile is-ancestor">
      <div class="admin-layout__left-side tile is-parent is-vertical">
        <SideNavBar />
      </div>

      <div class="tile is-parent is-vertical admin-layout__side-bar">
        <div class="tile is-child admin-layout__top-bar">
          <TopBar />
        </div>

        <div class="tile is-child admin-layout__content">
          <!-- <router-view /> -->
          <Home />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideNavBar from "./SideNavBar";
import TopBar from "./TopBar";

import Home from "../views/Home/Home"; // remover isso -----------

export default {
  components: {
    SideNavBar,
    TopBar,
    Home
  }
};
</script>

<style lang="sass">
.admin-layout
  height: 100%
  min-height: 600px
  background-color: white
  .tile.is-ancestor
    margin: 0
  .tile.is-parent
    padding: 0
  &__wrap
    height: 100%
  &__left-side
    min-width: 280px
    max-width: 280px
  &__top-bar
    padding: 40px 20px 0 20px
    max-height: 80px
  &__content
</style>