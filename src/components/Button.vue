<template>
  <div class="has-text-centered">
    <button class="button" :class="color" @click="onClick">{{title}}</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "is-primary"
    },
    onClick: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="sass" scoped>
button
  width: 140px
  font-weight: bold
</style>