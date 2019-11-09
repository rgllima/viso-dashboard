<template>
  <div class="top-bar">
    <div class="level">
      <div class="level-left top-bar__search">
        <div class="field">
          <div class="control has-icons-right">
            <input class="input" type="text" placeholder="Pesquisar" value />
            <span class="icon is-small is-right">
              <i class="fas fa-search"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="level-right top-bar__profile">
        <div class="top-bar__info level-item">
          <h1 class="subtitle has-color-secondary is-size-4">Tomás Sousa</h1>
          <span>Editar Perfil Sair</span>
        </div>
        <div class="top-bar__avatar level-item">
          <figure class="image is-64x64">
            <img class="is-rounded" src="https://thispersondoesnotexist.com/image" />
          </figure>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="sass">
.top-bar
  padding-right: 50px
  &__search
    .input
      width: 300px
      background-color: #d7d7d7
      border: solid 1px #bdbdbd
    i
      color: #bdbdbd
      font-size: 1.5rem
  &__profile
    width: 220px
    display: flex
    flex-direction: row
    justify-content: space-between !important
  &__avatar
    justify-self: flex-start
  &__info
    display: flex
    flex-direction: column
</style>