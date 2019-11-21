<template>
  <div class="municipal">
    <router-view/>
    <!-- <div class="tile is-parent">
      <div class="tile is-child municipal__figure is-5">
        <img class="municipal__image" src="../../assets/city.png" alt="City" />
      </div>

      <div class="tile is-child municipal__form">
        <div class="municipal__form__card">
          <CustomTitle title="Identificação Municipal" />

          <Dropdown title="Área de Atendimento" :options="[]" />

          <Dropdown title="Situação Cadastral" :options="[]" />

          <Dropdown title="Benefícios" :options="[]" />

          <Dropdown title="Renda" :options="[]" />

          <div class="municipal__form__button">
            <Button title="Identificar" :onClick="submit" />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import Dropdown from "@/components/Dropdown";
import CustomTitle from "@/components/CustomTitle";
import Button from "@/components/Button";

export default {
  components: {
    Dropdown,
    CustomTitle,
    Button
  },

  methods: {
    submit() {
      alert("Funcionando");
    }
  }
};
</script>

<style lang="sass" scoped>
.municipal
  // background-color: whitesmoke
  height: 100%
  display: flex
  flex-direction: column
  justify-content: center
  // align-content: center
</style>