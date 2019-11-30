<template>
  <div class="home">
    <div class="tile is-parent">
      <div class="tile is-child home__figure is-5">
        <img class="home__image" src="../../assets/people.png" alt="People" />
      </div>

      <div class="tile is-child home__form">
        <div class="home__form__card">
          <label class="subtitle has-color-secondary">Identificação Familiar</label>
          <div class="home__form__bar"></div>

          <div class="field">
            <label class="label has-color-secondary">Responsável Familiar (RF)</label>
            <div class="control">
              <input class="input" type="text" />
            </div>
          </div>

          <div class="field">
            <label class="label has-color-secondary">NIS/PIS/PASEP do RF:</label>
            <div class="control">
              <input class="input" type="number" />
            </div>
          </div>

          <div class="home__form__button has-text-centered">
            <button class="button is-primary">Identificar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  // components: {
  //   Modal
  // },

  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>
.home
  height: 100%
  display: flex
  flex-direction: column
  justify-content: center

  &__figure
    padding: 10px
    display: flex
    flex-direction: column
    justify-content: center

  &__image
    width: 330px
    margin: 0 auto

  &__form
    padding: 10px
    display: flex
    flex-direction: column
    justify-content: center

    &__bar
      width: 100px
      height: 5px
      margin-bottom: 25px
      background-color: #ffcc00

    &__card
      height: 350px
      min-width: 320px
      width: 55%

      .subtitle
        font-size: 2rem
        font-weight: 700

      .label
        font-size: 1.5rem
        font-weight: 100

      .input
        background-color: #d7d7d7
        border: solid 1px #bdbdbd

    &__button
      margin-top: 50px

      button
        width: 140px
        font-weight: bold

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button
  -webkit-appearance: none
  margin: 0

</style>