<template>
  <div class="dashboard">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h3 class="h3">ダッシュボード</h3>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group mr-2">
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
            @click="initLineData()"
          >
            初期化
          </button>
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
            @click="updateLineData()"
          >
            更新
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary">
            共有
          </button>
          <button type="button" class="btn btn-sm btn-outline-secondary">
            出力
          </button>
        </div>
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary dropdown-toggle"
        >
          <calendar-icon size="1.5x" class="custom-class"></calendar-icon>
          今週
        </button>
      </div>
    </div>
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <b-container fluid>
        <h5 class="h5">データ追加</h5>
        <b-row>
          <b-col sm="3">
            <label>label</label>
          </b-col>
          <b-col sm="9">
            <b-form-input
              id="type-text"
              type="text"
              v-model="label"
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="3">
            <label>data</label>
          </b-col>
          <b-col sm="9">
            <b-form-input
              id="type-number"
              type="number"
              v-model="data"
            ></b-form-input>
          </b-col>
        </b-row>
        <button
          type="button"
          class="btn btn-sm btn-outline-primary"
          @click="createLineData()"
        >
          Submit
        </button>
      </b-container>
    </div>
    <main role="main" class="col-md-9 mr-sm-auto col-lg-10 px-md-4">
      <line-chart
        :chart-data="chartData"
        :options="chartOptions"
        class="line"
      ></line-chart>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { CalendarIcon } from "vue-feather-icons";
import LineChart from "@/components/LineChart.vue";
import { API } from "aws-amplify";
import { createLineData } from "@/graphql/mutations";
import { listDatas, listLabels } from "@/graphql/queries";

@Component({
  components: {
    //MyButton,
    CalendarIcon,
    LineChart,
  },
})
export default class Dashboard extends Vue {
  public chartData: Chart.ChartData = {};
  public chartOptions: Chart.ChartOptions = {};
  label = "sample";
  data = 10;
  labels: string[] = [];
  datas: number[] = [];

  init() {
    this.labels = ["左", "真ん中", "右"];
    this.datas = [
      this.getRandomInt(),
      this.getRandomInt(),
      this.getRandomInt(),
    ];
  }

  mounted() {
    this.initLineData();
  }

  fillData() {
    console.log("fill", this.labels, this.datas);
    this.chartData = {
      labels: this.labels,
      datasets: [
        {
          type: "line",
          label: "グラフ",
          data: this.datas,
          fill: true,
          borderColor: "#AAFFAA",
        },
      ],
    };
  }

  async createLineData() {
    const { label, data } = this;
    if (!label || !data) return;
    const linedata = { label, data };
    console.log("aaaaa", label, data, linedata);
    await API.graphql({
      query: createLineData,
      variables: { input: linedata },
    });
  }

  initLineData() {
    this.init();
    this.fillData();
  }

  //二回クエリが走る
  async updateLineData() {
    const d: any = await API.graphql({
      query: listDatas,
    });
    const l: any = await API.graphql({
      query: listLabels,
    });

    // getしたデータでチャートを表示する
    const tmpd = d.data.listLineDatas.items;
    const tmpl = l.data.listLineDatas.items;
    const datas = tmpd.map((e: any) => e.data);
    const labels = tmpl.map((e: any) => e.label);
    console.log("xx", datas, labels);
    this.datas = datas;
    this.labels = labels;
    this.fillData();
  }

  getRandomInt() {
    return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
  }
}
</script>

<style>
.line {
  max-width: 400px;
}
</style>
