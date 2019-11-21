<template>
  <div class="data-card">
    <div class="data-card__box">
      <h2>{{title}}</h2>
      <h1>{{value}}</h1>
    </div>
    <div class="data-card__description">
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="sass" scoped>
.data-card
  color: #0b1728
  display: table

  &__box
    padding: 2px
    width: fit-content
    text-align: center
    background-color: #ffcc00
    display: table-cell

    h2
      font-size: 1.2rem

    h1
      font-size: 2rem

  &__description
    padding: 5px
    width: 210px
    font-size: .85rem
    display: table-cell
    vertical-align: middle
</style>