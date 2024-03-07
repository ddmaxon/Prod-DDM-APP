import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-welcomebox',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './welcomebox.component.html',
  styleUrl: './welcomebox.component.scss'
})
export class WelcomeboxComponent implements OnInit{
  ngOnInit() {
    this.renderChart();
  }

  renderChart() {
    const options = {
      chart: {
        type: 'line',
        height: 400
      },
      series: [{
        name: 'Sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      }
    };

    const chart = new ApexCharts(document.getElementById('chart'), options);
    chart.render();
  }
}
