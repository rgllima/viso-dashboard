<template>
  <div class="custom-title">
    <label class="subtitle has-color-secondary">{{title}}</label>
    <div class="custom-title__bar"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="sass" scoped>
.custom-title
  width: fit-content
  .subtitle
    font-size: 1.85rem
    font-weight: 700

  &__bar
    width: 100px
    height: 5px
    margin-bottom: 25px
    background-color: #ffcc00
</style>