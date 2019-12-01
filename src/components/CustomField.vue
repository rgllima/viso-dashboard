<template>
  <div class="custom-field">
    <label class="label" :class="labelSize">{{title}}</label>
    <h3 :class="valueSize" v-for="(value, i) in values" :key="i">{{value}}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    values: {
      type: Array,
      required: true
    },
    labelSize: {
      type: String,
      default: ""
    },
    valueSize: {
      type: String,
      default: "is-size-4"
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../assets/css/variables"

.custom-field
  margin-bottom: 15px

  .label, h3
    color: $secondary
</style>