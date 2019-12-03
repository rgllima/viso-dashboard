<template>
  <div class="donut-chart">
    <div id="donut-chart__wrap"></div>

    <div class="donut-chart__title">
      <h1>{{title}}</h1>
    </div>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/kelly";

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },

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
    },

    generateChart() {
      am4core.useTheme(this.customAm4Theme);
      // Themes end

      // Create chart instance
      var chart = am4core.create("donut-chart__wrap", am4charts.PieChart);

      // Add data
      chart.data = this.data;

      // Set inner radius
      chart.innerRadius = am4core.percent(50);

      // Add and configure Series
      var pieSeries = chart.series.push(new am4charts.PieSeries());
      pieSeries.dataFields.value = "value";
      pieSeries.dataFields.category = "label";
      pieSeries.slices.template.stroke = am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      pieSeries.slices.template.cornerRadius = 5;

      // This creates initial animation
      pieSeries.hiddenState.properties.opacity = 1;
      pieSeries.hiddenState.properties.endAngle = -90;
      pieSeries.hiddenState.properties.startAngle = -90;
    }
  },

  watch: {
    data() {
      this.generateChart();
    }
  },

  mounted() {
    this.generateChart();
  }
};
</script>

<style lang="sass" scoped>
@import "../assets/css/variables"

#donut-chart__wrap
  width: 100%
  height: 280px

.donut-chart
  &__title
    background-color: $primary
    padding: 10px
    border-radius: 5px
    width: 250px
    margin: 0 auto
    text-align: center
</style>