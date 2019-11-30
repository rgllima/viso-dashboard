<template>
  <div class="dados">
    <CustomTitle title="Identificação Municipal" />
    <div class="tile is-parent">
      <div class="tile is-child is-vertical">
        <div class="tile is-child">
          <DonutChart />
        </div>
        <div class="tile is-child">
          <GaugeChart />
        </div>
      </div>
      <div class="tile is-child is-4">
        <FilterForm />
      </div>
    </div>
    <div class="dados__summarized">
      <div class="dados__summarized__bar"></div>
      <div class="dados__summarized__card">
        <DataCard
          title="CRAS - Bruna Queiroz"
          description="Famílias estão cadastradas no Programa Bolsa Família"
          :value="476"
        />
        <DataCard
          title="Média de Membros Dependentes"
          description="Famílias estão cadastradas no Programa Bolsa Família"
          :value="476"
        />
        <DataCard
          title="Bloqueados"
          description="Famílias possuem renda percapita de R$ 89,01 à 178,00"
          :value="34"
        />
        <DataCard
          title="BV Gravidez"
          description="Famílias possuem renda percapita de R$ 89,01 à 178,00"
          :value="10"
        />
        <DataCard
          title="Pobreza"
          description="Famílias possuem renda percapita de R$ 89,01 à 178,00"
          :value="234"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CustomTitle from "@/components/CustomTitle";
import DonutChart from "@/components/DonutChart";
import GaugeChart from "@/components/GaugeChart";
import FilterForm from "./components/FilterForm";
import DataCard from "./components/DataCard";

export default {
  components: {
    CustomTitle,
    DonutChart,
    GaugeChart,
    FilterForm,
    DataCard
  }
};
</script>

<style lang="sass" scoped>
.dados
  // background-color: red
  height: 100%
  &__summarized
    &__bar
      width: 100px
      height: 5px
      margin-bottom: 25px
      background-color: #ffcc00
      margin-bottom: 40px

    &__card
      display: grid
      grid-template-columns: auto auto
      grid-column-gap: 10px
      grid-row-gap: 10px
</style>