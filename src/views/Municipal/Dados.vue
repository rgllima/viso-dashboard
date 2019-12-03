<template>
  <div class="dados">
    <FilterFormModal :isActive="showFilterModal" @close="closeFilterModal" />

    <CustomTitle title="Identificação Municipal" />

    <div class="dados__filters">
      <button class="button is-small" @click="openFilterModal">Adicionar Filtros</button>
    </div>

    <div class="dados__header">
      <h1 class="is-size-5">{{filteredData.cras}}</h1>
      <h2>{{filteredData.families}} famílias</h2>
    </div>

    <div class="tile is-parent">
      <div class="tile is-child is-vertical">
        <div class="tile is-child">
          <DonutChart :data="filteredData.data" :title="filteredData.name" />
        </div>
        <!-- <div class="tile is-child">
          <GaugeChart />
        </div>-->
      </div>
      <!-- <div class="tile is-child is-4">
        <FilterForm />
      </div>-->
    </div>
    <!-- <div class="dados__summarized">
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
    </div>-->
  </div>
</template>

<script>
import CustomTitle from "@/components/CustomTitle";
import DonutChart from "@/components/DonutChart";
import GaugeChart from "@/components/GaugeChart";
import FilterForm from "./components/FilterForm";
import DataCard from "./components/DataCard";
import FilterFormModal from "./components/FilterFormModal";
import { mapGetters } from "vuex";

export default {
  components: {
    CustomTitle,
    DonutChart,
    GaugeChart,
    FilterForm,
    DataCard,
    FilterFormModal
  },

  data() {
    return {
      showFilterModal: false
    };
  },

  computed: {
    ...mapGetters({
      filteredData: "getFilteredData"
    })
  },

  methods: {
    openFilterModal() {
      this.showFilterModal = true;
    },

    closeFilterModal() {
      this.showFilterModal = false;
    }
  },

  mounted() {
    if (this.filteredData.data.length === 0) this.$router.push("/municipal");
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/css/variables"
.dados
  height: 100%

  &__filters
    display: flex
    flex-direction: column
    // justify-content: end

    .button
      width: 100px
      background-color: $primary
      color: white
      border-radius: 5px


  &__header
    height: 50px
    width: 100%
    margin: 10px 0
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    border-radius: 10px
    background-color: $primary
    color: $secondary

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