<template>
  <div class="add-sheet-modal">
    <Modal :isActive="isActive" @close="$emit('close')">
      <div class="add-sheet-modal__content">
        <h1>Inserir Planilha</h1>

        <div class="add-sheet-modal__dropdowns">
          <Dropdown
            class="add-sheet-modal__dropdown"
            title="Mês Referente"
            :options="['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']"
            v-model="month"
          />
          <Dropdown
            class="add-sheet-modal__dropdown"
            title="Ano"
            :options="['2018', '2019']"
            v-model="year"
          />
        </div>

        <div class="file">
          <label class="file-label">
            <input class="file-input" type="file" name="sheet" @change="getFile" />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">Escolha um arquivo</span>
            </span>
          </label>
        </div>

        <button class="button is-small is-success" @click="submit">Inserir</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import Dropdown from "@/components/Dropdown";

export default {
  components: {
    Modal,
    Dropdown
  },

  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      sheet: {},
      month: "",
      year: ""
    };
  },

  methods: {
    getFile(ev) {
      const file = ev.target.files[0];
      const reader = new FileReader();

      reader.onload = async e => {
        this.sheet = e.target.result;
      };
      reader.readAsArrayBuffer(file);
    },

    submit() {
      this.$emit("submit", {
        sheet: this.sheet,
        month: this.month,
        year: this.year
      });

      this.resetFields();
      this.$emit("close");
    },

    resetFields() {
      (this.sheet = {}), (this.month = ""), (this.year = "");
    }
  }
};
</script>

<style lang="sass" scoped>
.add-sheet-modal
  &__content
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

    h1
      font-size: 1.7rem
      color: #0b1728ff
      font-weight: bold

    .button
      width: 90px
      margin: 0 20px
      border-radius: 5px
      margin: 5px 0

  &__dropdowns
    display: flex
    flex-direction: row
    margin: 5px 0

  &__dropdown
    width: 200px
    margin: 20px 5px

</style>