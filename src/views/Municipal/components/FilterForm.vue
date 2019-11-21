<template>
  <div class="filter-form">
    <div class="filter-form__card">
      <Dropdown title="Área de Atendimento" :options="[]" />

      <Dropdown title="Situação Cadastral" :options="[]" />

      <Dropdown title="Benefícios" :options="[]" />

      <Dropdown title="Renda" :options="[]" />

      <div class="filter-form__button">
        <Button title="Identificar" :onClick="submit" />
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";

export default {
  components: {
    Dropdown,
    Button
  },

  methods: {
    submit() {
      this.$router.push("/municipal/dados")
    }
  }
};
</script>

<style lang="sass" scoped>
.filter-form
  width: fit-content

  &__card
    height: 300px
    width: 300px

  &__button
    margin-top: 30px
</style>