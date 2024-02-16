import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexDataLabels,
  ApexTheme
} from "ng-apexcharts";
import { HelperService } from '../../../../../core/helper.service';
import { RequestService } from '../../../../../core/request.service';
import { HttpClientModule } from '@angular/common/http';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  dataLabels: ApexDataLabels;
  theme: ApexTheme;
};

@Component({
  selector: 'app-execchart',
  standalone: true,
  imports: [
    NgApexchartsModule,
    HttpClientModule
  ],
  templateUrl: './execchart.component.html',
  styleUrl: './execchart.component.scss'
})
export class ExecchartComponent {
  @ViewChild("chart") chart?: ChartComponent;

  @Input() data: any;
  @Input() title: string = "Timechart";

  public chartOptions: ChartOptions = {
    series: [400],
    chart: {
      width: 450,
      type: "donut",
      animations: {
        speed: 200
      }
    },
    labels: ["Data A"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ],
    dataLabels: {
      style: {
        colors: ['#F44336', '#E91E63', '#9C27B0']
      }
    },
    theme: {
      palette: 'palette1' // upto palette10
    }
  };

  async ngOnInit() {
    this.loadChart();
  }

  loadChart() {
    let series: any = [];
    let labels: any = ["Data A", "Data B", "Data C"];

    labels.forEach((label: string) => {
      series.push(this.getRandomInt(1000));
    });

    this.chartOptions.series = series;
    this.chartOptions.labels = labels;
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}
