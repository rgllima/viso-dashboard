<template>
  <div class="modal" :class="{'modal--active': isActive}">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <button class="delete" aria-label="close" @click="$emit('close')"></button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="sass">
.modal
  &--active
    display: flex !important
</style>

<style lang="sass" scoped>
@import "../assets/css/variables"

.modal
  &-card
    &-head
      padding: 0
      background-color: white
      border-radius: 0
      justify-content: flex-end
      border: none

    &-body
      padding-bottom: 35px

  .delete
    background-color: #d7d7d7
    border-radius: 0
    height: 35px
    min-height: 35px
    max-height: 35px
    width: 35px
    min-width: 35px
    max-width: 35px

    &::after
      background-color: $secondary
      height: 80%
      width: 3px

    &::before
      background-color: $secondary
      height: 3px
      width: 80%

</style>