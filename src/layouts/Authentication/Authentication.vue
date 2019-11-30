<template>
  <div class="authentication">
    <div class="tile is-parent">
      <div class="tile is-child authentication__info-system">
        <div class="authentication__figure">
          <img class="authentication__figure__logo" src="../../assets/logo.png" alt="Viso Logo" />
        </div>
        <p
          class="authentication__description"
        >Automatização do tratamento dos dados da folha de pagamento do Programa Bolsa Família para a otimização dos processos de visualização das informações dos benefícios no município de Quixadá (CE)</p>
      </div>
      <div class="tile is-child authentication__forms">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import "../../assets/css/variables"

.authentication
  height: 100%

  .is-parent
    height: 100%
    padding: 0

  &__info-system, &__forms
    padding: 0 30px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    height: 100%

  &__info-system
    background-color: #f2f2f2

  &__figure
    height: 120px
    width: fit-content
    margin-bottom: 30px

    &__logo
      display: block
      height: 100%
  &__description
    color: $secondary
    text-align: center
    font-size: 1.3rem
    line-height: 1.2

  &__forms
</style>