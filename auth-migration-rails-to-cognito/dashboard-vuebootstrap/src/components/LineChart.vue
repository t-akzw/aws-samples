<script lang="ts">
import { Line, mixins } from "vue-chartjs";
import { Component, Prop, Mixins } from "vue-property-decorator";
// eslint-disable-next-line no-unused-vars
import { ChartData, ChartOptions } from "chart.js";

@Component
export default class LineChart extends Mixins(Line, mixins.reactiveProp) {
  @Prop()
  public chartData!: ChartData;

  @Prop()
  public chartOptions!: ChartOptions;

  public mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  }
}
</script>
