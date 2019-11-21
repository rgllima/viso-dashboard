<template>
  <div class="identificacao">
    <div class="tile is-parent">
      <div class="tile is-child identificacao__figure is-5">
        <img class="identificacao__image" src="../../assets/city.png" alt="City" />
      </div>

      <div class="tile is-child identificacao__form">
        <CustomTitle title="Identificação Municipal" />
        <FilterForm />
      </div>
    </div>
  </div>
</template>

<script>
import CustomTitle from "@/components/CustomTitle";
import FilterForm from "./components/FilterForm";

export default {
  components: {
    CustomTitle,
    FilterForm
  }
};
</script>

<style lang="sass" scoped>
.identificacao
  margin: 0 auto

  .tile.is-parent
    justify-content: space-between

  &__figure
    display: flex
    flex-direction: column
    justify-content: center

  &__image
    width: 350px
    margin: 0 auto

  &__form
    padding-top: 30px
    padding-left: 30px
    max-width: fit-content

// @media screen and (min-width: 769px)
</style>