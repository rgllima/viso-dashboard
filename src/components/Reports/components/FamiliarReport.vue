<template>
  <div class="familiar-report">
    <div class="familiar-report__title">
      <label class="subtitle has-color-secondary">Relatório Familiar</label>
      <div class="familiar-report__bar"></div>
    </div>

    <div class="familiar-report__content">
      <div class="tile is-parent">
        <div class="tile is-child">
          <CustomTitle title="Identificação Familiar" titleSize="is-size-5" />
          <div class="familiar-report__field">
            <CustomField
              title="Nome do Responsável Familiar"
              :values="[nome_responsavel]"
              labelSize="is-size-7"
              valueSize="is-size-5"
            />
            <div class="familiar-report__field__grid">
              <CustomField
                title="NIS/PIS/PASEP"
                :values="[nis_pis_pasep]"
                labelSize="is-size-7"
                valueSize="is-size-5"
              />
              <CustomField
                title="Data de Nascimento"
                :values="[data_nasc]"
                labelSize="is-size-7"
                valueSize="is-size-5"
              />
              <CustomField
                title="Logradouro"
                :values="[logradouro]"
                labelSize="is-size-7"
                valueSize="is-size-5"
              />
              <CustomField
                title="Bairro"
                :values="[bairro]"
                labelSize="is-size-7"
                valueSize="is-size-5"
              />
              <CustomField
                title="Situacao Cadastral"
                :values="[situacao_cadastral]"
                labelSize="is-size-7"
                valueSize="is-size-5"
              />
              <CustomField
                title="Banco"
                :values="[banco]"
                labelSize="is-size-7"
                valueSize="is-size-5"
              />
              <CustomField
                title="Competencia Inicial"
                :values="[competencia_inicial]"
                labelSize="is-size-7"
                valueSize="is-size-5"
              />
              <CustomField
                title="Competencia Folha"
                :values="[competencia_folha]"
                labelSize="is-size-7"
                valueSize="is-size-5"
              />
              <CustomField
                title="Situacao Socioeconomica"
                :values="[situacao_socioeconomica]"
                labelSize="is-size-7"
                valueSize="is-size-5"
              />
              <CustomField
                title="Membros Dependentes"
                :values="[membros_dependentes]"
                labelSize="is-size-7"
                valueSize="is-size-5"
              />
              <CustomField
                title="Renda Percapita"
                :values="[renda_percapita]"
                labelSize="is-size-7"
                valueSize="is-size-5"
              />
              <CustomField
                title="Renda Percapita + PBF"
                :values="[renda_percapita_pbf]"
                labelSize="is-size-7"
                valueSize="is-size-5"
              />
            </div>
          </div>
        </div>

        <div class="tile is-child">
          <CustomTitle title="Benefícios e Valores" titleSize="is-size-5" />
          <div class="familiar-report__field">
            <CustomField
              title="Beneficios Recebidos"
              :values="beneficios_recebidos"
              labelSize="is-size-7"
              valueSize="is-size-5"
            />
            <CustomField
              title="Soma Total de Beneficios"
              :values="[total_beneficios]"
              labelSize="is-size-7"
              valueSize="is-size-5"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomField from "@/components/CustomField";
import CustomTitle from "@/components/CustomTitle";

export default {
  components: {
    CustomField,
    CustomTitle
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
.familiar-report
  &__title
    .subtitle
      padding: 0 10px
      font-weight: 700

  &__bar
    width: 100%
    height: 3px
    background-color: #ffcc00

  &__content
  &__field
    &__grid
      display: grid
      grid-template-columns: 50% 50%
      grid-column-gap: 10px
</style>