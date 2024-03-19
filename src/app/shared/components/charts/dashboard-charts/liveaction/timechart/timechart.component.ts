import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from "ng-apexcharts";

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart
} from "ng-apexcharts";
import { HelperService } from '../../../../../core/helper.service';
import { RequestService } from '../../../../../core/request.service';
import { HttpClientModule } from '@angular/common/http';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-timechart',
  standalone: true,
  imports: [
    NgApexchartsModule,
    HttpClientModule
  ],
  templateUrl: './timechart.component.html',
  styleUrl: './timechart.component.scss',
  providers: [HelperService, RequestService]
})
export class TimechartComponent implements OnInit {
  @ViewChild("chart") chart?: ChartComponent;

  @Input() data: any;
  @Input() title: string = "Timechart";

  public chartOptions: ChartOptions = {
    series: [400],
    chart: {
      width: 450,
      type: "donut"
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
    ]
  };

  async ngOnInit() {
    let series: any = [];
    let labels: any = [];

    await this.data.data.execTimeline.sorted.forEach((index: any) => {
      series.push(index.value.count);
      labels.push(index.key);
    });

    this.chartOptions.series = series;
    this.chartOptions.labels = labels;
  }

  
}