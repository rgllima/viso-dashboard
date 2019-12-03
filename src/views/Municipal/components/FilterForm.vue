<template>
  <div class="filter-form">
    <div class="filter-form__card">
      <Dropdown v-model="area_atendimento" title="Área de Atendimento" :options="customCras" />

      <Dropdown
        v-model="filter"
        title="Identificação"
        :options="['Situação Cadastral', 'Tempo de Cadastro', 'Média de Membros', 'Benefícios', 'Renda']"
      />

      <div class="filter-form__button">
        <Button :class="{'is-loading': loading}" title="Identificar" :onClick="submit" />
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";
import { mapGetters } from "vuex";

export default {
  components: {
    Dropdown,
    Button
  },

  data() {
    return {
      area_atendimento: "",
      filter: "",
      loading: false
    };
  },

  computed: {
    customCras() {
      return this.cras.map(a => a.name);
    },

    ...mapGetters({
      cras: "getCras"
    })
  },

  methods: {
    submit() {
      this.loading = true;
      this.$store.dispatch("doMunicipalIdentification", {
        filter: this.filter,
        area_atendimento: this.area_atendimento
      });
      this.loading = false;
      this.$router.push("/municipal");
      this.$router.push("/municipal/dados");
      this.$emit("close");
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