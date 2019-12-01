<template>
  <div class="report" id="reports">
    <Header />
    <div class="report__content">
      <FamiliarReport />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import FamiliarReport from "./components/FamiliarReport";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default {
  components: {
    Header,
    FamiliarReport
  },

  data() {
    return {};
  },

  methods: {
    generatePDF() {
      var w = document.getElementById("reports").offsetWidth;
      var h = document.getElementById("reports").offsetHeight;
      console.log(w, h);

      html2canvas(document.getElementById("reports"), {
        dpi: 300,
        scale: 3
      }).then(canvas => {
        var img = canvas.toDataURL("image/jpeg", 1);
        var doc = new jsPDF("L", "pt", [w, h]);
        doc.addImage(img, "JPEG", 0, 0, w, h);
        doc.save("relatorio-familiar.pdf");
        window.close()
      });
    }
  },

  mounted() {
    this.generatePDF();
  }
};
</script>

<style lang="sass">
#app
  overflow: scroll
</style>

<style lang="sass" scoped>
.report
  width: 842px
  height: 595px
  // background-color: #f2f2f2
  padding: 20px

  &__content
</style>