<template>
  <div class="report-header">
    <div class="tile is-parent">
      <div class="report-header__institution tile is-child is-2">
        <img
          class="report-header__institution__logo"
          :src="institution_logo"
          alt="Institution Logo"
        />
      </div>

      <div class="report-header__letterhead tile is-child">
        <p class="has-text-weight-semibold is-size-7">{{system}}</p>
        <p class="is-size-7">{{`${institution} | ${address}`}}</p>
        <p
          class="has-text-weight-bold is-size-7"
        >{{`Emitido em: ${date_build.toLocaleDateString()} às ${date_build.toLocaleTimeString()}`}}</p>
      </div>

      <div class="report-header__viso tile is-child is-2">
        <img class="report-header__viso__logo" :src="viso_logo" alt="Viso Logo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viso_logo: require("../../../assets/logo.png"),
      institution_logo: require("../../../assets/quixada.png"),
      system: "VISO - Sistema de Visualização Social",
      institution: "SDS - Secretaria de Desenvolvimento Social",
      address: "Rua José Alencar. 405 - Centro. Quixadá (CE)",
      date_build: new Date()
    };
  }
};
</script>

<style lang="sass" scoped>
@import "../../../assets/css/variables"

.report-header
  height: fit-content

  &__institution, &__viso
    max-height: 50px
    min-height: 50px
    padding: 0

    &__logo
      height: 100%
      max-width: none

  &__letterhead
    text-align: center
    color: $secondary
    line-height: 1.2

  &__viso
    text-align: end
</style>