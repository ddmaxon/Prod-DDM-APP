import { Component, OnInit } from '@angular/core';
import { ChartNavComponent } from '../../shared/components/charts/dashboard-charts/chart-nav/chart-nav.component';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    ChartNavComponent,
    RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
