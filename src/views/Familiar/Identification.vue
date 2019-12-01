<template>
  <div class="familiar-ident">
    <div class="tile is-parent">
      <div class="tile is-child familiar-ident__figure">
        <div class="familiar-ident__figure__vertical-bar"></div>
        <img class="familiar-ident__figure__image" src="../../assets/people.png" alt="People" />
      </div>

      <div class="tile is-child familiar-ident__form">
        <div class="familiar-ident__form__card">
          <CustomTitle title="Identificação Familiar" />

          <div class="field">
            <label class="label has-color-secondary">Responsável Familiar (RF):</label>
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

          <div class="familiar-ident__form__button has-text-centered">
            <Button title="Identificar" :onClick="submit" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomTitle from "@/components/CustomTitle";
import Button from "@/components/Button";

export default {
  components: {
    CustomTitle,
    Button
  },

  methods: {
    submit() {
      this.$router.push({
        path: "/familiar/individual",
        query: { page: "preview-report", type: "FamiliarReport" }
      });
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/css/variables"

.familiar-ident
  &__figure, &__form
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

  &__figure
    position: relative

    &__vertical-bar
      background-color: $secondary
      content: ""
      width: 1px
      height: 100%
      position: absolute
      right: 0

    &__image
      width: 60%

  &__form
    &__card
      height: 350px
      min-width: 320px
      width: 60%

      .field
        margin: 30px 0

      .label
        font-size: 1.5rem
        font-weight: 100

      .input
        background-color: #d7d7d7
        border: solid 1px #bdbdbd

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button
  -webkit-appearance: none
  margin: 0
</style>