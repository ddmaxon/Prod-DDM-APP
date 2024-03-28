import { Component, Input, OnInit } from '@angular/core';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-progress-charts',
  standalone: true,
  imports: [],
  templateUrl: './progress-charts.component.html',
  styleUrl: './progress-charts.component.scss'
})
export class ProgressChartsComponent implements OnInit {

  @Input() data: any;

  colors_per_procent_100 = "#90ee90";
  gradient_per_procent_100 = "#008000";

  colors_per_procent_lt_100 = "#FF7F7F";
  gradient_per_procent_lt_100 = "#dc0000";


  ngOnInit(): void {

    console.log(this.data)

    const options: any = {
      chart: {
        height: 280,
        type: "radialBar",
      },
      series: [this.data],
      colors: [this.getProgressColor().colors],
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff"
          },
          track: {
            dropShadow: {
              enabled: true,
              top: 2,
              left: 0,
              blur: 4,
              opacity: 0.15
            }
          },
          dataLabels: {
            name: {
              offsetY: -10,
              color: "#fff",
              fontSize: "13px"
            },
            value: {
              color: "#fff",
              fontSize: "30px",
              show: true
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          gradientToColors: [this.getProgressColor().gradient],
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Progress"]
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  }


  getProgressColor() {
    if (this.data < 100) {
      return { colors: this.colors_per_procent_lt_100, gradient: this.gradient_per_procent_lt_100 };
    }
    return { colors: this.colors_per_procent_100, gradient: this.gradient_per_procent_100 };
  }
}
