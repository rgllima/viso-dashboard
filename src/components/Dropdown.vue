<template>
  <div class="field">
    <div class="control">
      <div class="select">
        <select class="dropdown" :value="value" @input="$emit('input', $event.target.value)">
          <option :value="null">{{title}}</option>
          <option v-for="(option, index) in options" :key="index" :value="option">{{option}}</option>
        </select>
      </div>
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
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>
.select
  width: 100%

  select
    background-color: #ffcc00ff
    border: solid 1px #bdbdbd
    width: 100%

.select:not(.is-multiple):not(.is-loading)::after
  border-color: #585858

</style>