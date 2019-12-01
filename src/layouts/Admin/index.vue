<template>
  <div class="admin-layout">
    <LogoutModal :isActive="activeLogoutModal" @close="closeLogoutModal" @logout="doLogout" />

    <div class="admin-layout__wrap tile is-ancestor">
      <div class="admin-layout__left-side tile is-parent is-vertical">
        <SideNavBar :currentPath="currentPath" />
      </div>

      <div class="tile is-parent is-vertical admin-layout__side-bar">
        <div class="tile is-child admin-layout__top-bar">
          <TopBar :currentPath="currentPath" :query="routeQuery" @confirmLogout="confirmLogout" />
        </div>

        <div class="tile is-child admin-layout__content">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoutModal from "./components/LogoutModal";
import SideNavBar from "./SideNavBar";
import TopBar from "./TopBar";

export default {
  components: {
    SideNavBar,
    TopBar,
    LogoutModal
  },

  data() {
    return {
      currentPath: "",
      routeQuery: {},
      activeLogoutModal: false
    };
  },

  watch: {
    $route() {
      console.log(this.$route);
      this.setCurrentPath(this.$route.path);
      this.setRouteQuery(this.$route.query);
    }
  },

  methods: {
    closeLogoutModal() {
      this.activeLogoutModal = false;
    },

    confirmLogout() {
      this.activeLogoutModal = true;
    },

    doLogout() {
      this.closeLogoutModal();
      this.$router.push("/login");
    },

    setCurrentPath(path) {
      this.currentPath = path;
    },

    setRouteQuery(query) {
      if (query) this.routeQuery = query;
      else this.routeQuery = {};
    }
  },

  mounted() {
    this.setCurrentPath(this.$route.path);
    this.setRouteQuery(this.$route.query);
  }
};
</script>

<style lang="sass">
.admin-layout
  height: 100%
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

  &__side-bar
    // min-height: 600px
    overflow-y: scroll

  &__top-bar
    padding: 40px 20px 0 20px
    max-height: 80px

  &__content
    padding: 10px
</style>