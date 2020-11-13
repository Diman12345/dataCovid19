import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild("valueBarsCanvas", null) valueBarsCanvas;
  
  bars: Chart;
  colorArray: any;
  count: string;
  constructor() {}
  ngOnInit(): void {}

  ionViewDidEnter() {
    this.createBarChart();
  }

  segmentChanged(ev) {
    this.count = ev.detail.value;
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.valueBarsCanvas.nativeElement, {
      type: "bar",
      data: {
        labels: ["Male", "Female"],
        datasets: [
          {
            label: "Grafik Data Covid19 bulan November",
            data: [5, 8],
            backgroundColor: "rgb(38, 194, 129)", // array should have same number of elements as number of dataset
            borderColor: "rgb(38, 194, 129)", // array should have same number of elements as number of dataset
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

}
