import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DatatableComponent } from '../../../shared/components/charts/dashboard-charts/history/datatable/datatable.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    CommonModule,
    DatatableComponent
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {

}
