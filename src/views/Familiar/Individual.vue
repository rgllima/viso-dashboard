<template>
  <div class="individual">
    <div class="tile is-parent">
      <div class="tile is-child">
        <CustomTitle title="Identificação Familiar" />
        <div class="individual__field">
          <CustomField title="Nome do Responsável Familiar" :values="[nome_responsavel]" />
          <div class="individual__field__grid">
            <CustomField title="NIS/PIS/PASEP" :values="[nis_pis_pasep]" />
            <CustomField title="Data de Nascimento" :values="[data_nasc]" />
            <CustomField title="Logradouro" :values="[logradouro]" />
            <CustomField title="Bairro" :values="[bairro]" />
            <CustomField title="Situacao Cadastral" :values="[situacao_cadastral]" />
            <CustomField title="Banco" :values="[banco]" />
            <CustomField title="Competencia Inicial" :values="[competencia_inicial]" />
            <CustomField title="Competencia Folha" :values="[competencia_folha]" />
            <CustomField title="Situacao Socioeconomica" :values="[situacao_socioeconomica]" />
            <CustomField title="Membros Dependentes" :values="[membros_dependentes]" />
            <CustomField title="Renda Percapita" :values="[renda_percapita]" />
            <CustomField title="Renda Percapita + PBF" :values="[renda_percapita_pbf]" />
          </div>
        </div>
      </div>

      <div class="tile is-child">
        <CustomTitle title="Benefícios e Valores" />
        <div class="individual__field">
          <CustomField title="Beneficios Recebidos" :values="beneficios_recebidos" />
          <CustomField title="Soma Total de Beneficios" :values="[total_beneficios]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomTitle from "@/components/CustomTitle";
import CustomField from "@/components/CustomField";

export default {
  components: {
    CustomTitle,
    CustomField
  },

  data() {
    return {
      nome_responsavel: "Valdelice Freire da Silva Oliveira",
      nis_pis_pasep: "17493265792c",
      data_nasc: "07/02/1978",
      logradouro: "Rua Rui Maia, 1872",
      bairro: "Centro",
      situacao_cadastral: "Liberado",
      banco: "Poupança - Caixa",
      competencia_inicial: "01/2006",
      competencia_folha: "10/2019",
      situacao_socioeconomica: "Pobreza",
      membros_dependentes: "04",
      renda_percapita: "R$ 80,00",
      renda_percapita_pbf: "R$ 110,20",
      beneficios_recebidos: [
        "R$ 89,00 - Básico",
        "R$ 41,00 - Variável Gravidez",
        "R$ 41,00 - Variável 16 e 17 anos"
      ],
      total_beneficios: "R$ 151,00"
    };
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/css/variables"

.individual
  height: 100%

  .is-child, &__field
    padding: 5px

  &__field
    background-color: #f2f2f2

    &__grid
      display: grid
      grid-template-columns: 50% 50%
      grid-column-gap: 10px
</style>