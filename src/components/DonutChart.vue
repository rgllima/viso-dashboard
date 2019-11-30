<template>
  <div>
    <div id="donutchartdiv"></div>
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

    // Create chart instance
    var chart = am4core.create("donutchartdiv", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        label: "Menos de 1 ano",
        value: 238
      },
      {
        label: "De 1 a 3 anos",
        value: 2644
      },
      {
        label: "De 4 a 6 anos",
        value: 1890
      },
      {
        label: "Mais de 7 anos",
        value: 544
      }
    ];

    // Set inner radius
    chart.innerRadius = am4core.percent(50);

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "label";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.slices.template.cornerRadius = 5

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
  }
};
</script>

<style lang="sass" scoped>
#donutchartdiv
  width: 100%
  height: 280px

</style>