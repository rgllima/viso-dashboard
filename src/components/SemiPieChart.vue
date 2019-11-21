<template>
  <div>
    <div id="piechartdiv"></div>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/kelly";

export default {
  methods: {
    customAm4Theme(target) {
      if (target instanceof am4core.ColorSet) {
        target.list = [
          am4core.color("#ffcc00"),
          am4core.color("#0b1728"),
          am4core.color("#c83737"),
          am4core.color("#006680")
        ];
      }
    }
  },

  mounted() {
    am4core.useTheme(this.customAm4Theme);
    // Themes end

    var chart = am4core.create("piechartdiv", am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
      {
        country: "CRAS - Bruna Queiroz",
        value: 401
      },
      {
        country: "CRAS - Alto São Francisco",
        value: 300
      },
      {
        country: "CRAS - São Bento",
        value: 300
      }
    ];
    chart.radius = am4core.percent(60);
    chart.innerRadius = am4core.percent(50);
    chart.startAngle = 180;
    chart.endAngle = 360;

    var series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.category = "country";

    series.slices.template.cornerRadius = 10;
    series.slices.template.innerCornerRadius = 7;
    series.slices.template.draggable = false;
    series.slices.template.inert = true;
    series.alignLabels = false;

    series.hiddenState.properties.startAngle = 90;
    series.hiddenState.properties.endAngle = 90;

    chart.legend = new am4charts.Legend();
  }
};
</script>

<style lang="sass" scoped>
#piechartdiv
  width: 100%
  height: 400px

</style>