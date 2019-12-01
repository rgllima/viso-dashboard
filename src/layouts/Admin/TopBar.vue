<template>
  <div class="top-bar">
    <div class="level">
      <div class="level-left top-bar__search">
        <div class="field">
          <div class="control has-icons-right">
            <input class="input" type="text" placeholder="Pesquisar" value />
            <span class="icon is-small is-right">
              <i class="icon--grey-light fas fa-search"></i>
            </span>
          </div>
        </div>

        <button
          v-if="showButton"
          class="top-bar__generate-report button is-info"
          @click="downloadReport"
        >
          <span class="icon">
            <i class="fas fa-download"></i>
          </span>
          <span>Download do Relatório</span>
        </button>
      </div>
      <div class="level-right top-bar__profile">
        <div class="top-bar__info level-item">
          <h1 class="subtitle has-color-secondary is-size-4">Tomás Sousa</h1>
          <span>
            <a href>Editar Perfil</a>
            <a @click="$emit('confirmLogout')">Sair</a>
          </span>
        </div>
        <div class="top-bar__avatar level-item">
          <figure class="image is-64x64">
            <img
              class="is-rounded top-bar__avatar__img"
              src="https://thispersondoesnotexist.com/image"
            />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentPath: {
      type: String,
      required: true
    },
    query: {
      type: Object
    }
  },

  methods: {
    downloadReport() {
      let routeData = this.$router.resolve({
        name: "test",
        query: { type: this.query.type }
      });
      window.open(routeData.href, "_blank");
    }
  },

  computed: {
    showButton() {
      console.log("Opa", this.query);
      if (this.query && this.query.page && this.query.page === "preview-report")
        return true;
      return false;
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/css/variables"

.top-bar
  padding-right: 50px

  &__search
    .input
      width: 300px
      background-color: #d7d7d7
      border: solid 1px #bdbdbd

    .icon--grey-light
      color: #bdbdbd
      font-size: 1.5rem

  &__generate-report
    margin-bottom: 10px
    margin-left: 25px
    font-size: .8rem
    height: 40px
    background-color: $secondary
    // width: 120px


  &__profile
    width: 220px
    display: flex
    flex-direction: row
    justify-content: space-between !important

  &__avatar
    justify-self: flex-start

    &__img
      background: #ffcc00ff
      // background: -moz-linear-gradient(left, rgba(52, 117, 247, 1) 0%, rgba(52, 117, 247, 1) 50%, rgba(230, 214, 39, 1) 50%, rgba(230, 214, 39, 1) 100%)
      // background: -webkit-gradient(left top, right top, color-stop(0%, rgba(52, 117, 247, 1)), color-stop(50%, rgba(52, 117, 247, 1)), color-stop(50%, rgba(230, 214, 39, 1)), color-stop(100%, rgba(230, 214, 39, 1)))
      // background: -webkit-linear-gradient(left, rgba(52, 117, 247, 1) 0%, rgba(52, 117, 247, 1) 50%, rgba(230, 214, 39, 1) 50%, rgba(230, 214, 39, 1) 100%)
      // background: -o-linear-gradient(left, rgba(52, 117, 247, 1) 0%, rgba(52, 117, 247, 1) 50%, rgba(230, 214, 39, 1) 50%, rgba(230, 214, 39, 1) 100%)
      // background: -ms-linear-gradient(left, rgba(52, 117, 247, 1) 0%, rgba(52, 117, 247, 1) 50%, rgba(230, 214, 39, 1) 50%, rgba(230, 214, 39, 1) 100%)
      background: linear-gradient(45deg, #ffcc00ff 0%, #ffcc00ff 50%, #0b1728ff 50%, #0b1728ff 100%)
      padding: 2px
  &__info
    display: flex
    flex-direction: column

    a
      color: #bdbdbd
      margin: 0 5px
      border-bottom: solid 1px #bdbdbd

</style>