<template>
  <div class="overview">
    <AddSheet :isActive="showAddSheetModal" @close="closeAddSheetModal" @submit="insertSheet" />
    <div class="tile is-parent">
      <div class="tile is-child">
        <table class="overview__table table is-fullwidth is-striped">
          <thead class="overview__table__thead">
            <tr>
              <th class="has-text-centered" title="Mês Referente">Mês Referente</th>
              <th class="has-text-centered" title="Ano">Ano</th>
              <th class="has-text-centered" title="Inserido em">Inserido em</th>
              <th class="has-text-centered" title="Arquivo">Arquivo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(sheet, key) in customSheets" :key="key">
              <td>{{sheet.month}}</td>
              <td class="has-text-centered">{{sheet.year}}</td>
              <td class="has-text-centered">{{sheet.uploadedAt.toLocaleDateString()}}</td>
              <td class="has-text-centered">
                <i class="far fa-file-excel"></i>
              </td>
            </tr>
          </tbody>
        </table>
        <button class="button is-small" @click="openAddSheetModal">Inserir Planilha</button>
      </div>
      <div class="overview__filters tile is-child is-3">
        <h1>Informações geradas a partir dos ultimos:</h1>

        <div class="overview__filters__radios">
          <div class="control" v-for="(month, key) in months" :key="key">
            <label for="label" class="radio">
              <input type="radio" name="periodo" :value="month" v-model="filteredMonth" />
              {{`${month} meses`}}
            </label>
          </div>
        </div>

        <button class="overview__filters__save-btn button is-small">Salvar</button>
      </div>
    </div>
  </div>
</template>

<script>
import AddSheet from "./components/AddSheet";
import xlsx from "xlsx";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    AddSheet
  },

  data() {
    return {
      showAddSheetModal: false,
      months: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      filteredMonth: 12
    };
  },

  computed: {
    customSheets() {
      return this.sheets.sort((a, b) => b.year - a.year);
    },

    ...mapGetters({
      sheets: "getSheets"
    })
  },

  methods: {
    insertSheet(file) {
      file["data"] = this.convertSheetToJson(file["sheet"]);
      file["uploadedAt"] = new Date();
      delete file["sheet"];
      this.$store.commit("pushSheet", file);
    },

    convertSheetToJson(sheet) {
      let data = new Uint8Array(sheet);
      let workbook = xlsx.read(data, {
        type: "array"
      });

      /* *****************************************************************
       * DO SOMETHING WITH workbook: Converting Excel value to Json       *
       ********************************************************************/
      let first_sheet_name = workbook.SheetNames[0];
      /* Get worksheet */
      let worksheet = workbook.Sheets[first_sheet_name];

      let _JsonData = xlsx.utils.sheet_to_json(worksheet, { raw: true });
      /************************ End of conversion ************************/

      console.log(_JsonData);

      // Retirar isso daqui
      String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
      };

      let response = [];
      for (let data of _JsonData) {
        let keys = Object.keys(data);
        let object = {};

        for (let oldKey of keys) {
          let newKey = oldKey
            .trim()
            .replaceAll(":", "")
            .replaceAll(".", "")
            .replaceAll(" ", "_");

          object[newKey] = `${data[oldKey]}`.trim();
        }

        response.push(object);
      }

      console.log(response);

      return response;
    },

    openAddSheetModal() {
      this.showAddSheetModal = true;
    },

    closeAddSheetModal() {
      this.showAddSheetModal = false;
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../../assets/css/variables"

.overview
  height: 100%

  .tile.is-child
    padding: 10px

  .button
    background-color: $primary
    color: $secondary
    border-radius: 5px
    float: right

  &__table
    &__thead
      font-size: .8rer

  &__filters
    &__radios
      padding: 10px 0
    &__save-btn
      margin: 0 auto
      display: block
      float: none !important
      width: 100px

.table.is-striped tbody tr
  background-color: #f2f2f2

.table.is-striped tbody tr:not(.is-selected):nth-child(even)
  background-color: #d7d7d7

.table.is-striped tbody tr td
  border: solid 5px white
</style>