import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProgressChartsComponent } from '../../charts/progress-charts/progress-charts.component';

@Component({
  selector: 'app-detailed-history-modal',
  standalone: true,
  imports: [
    ProgressChartsComponent
  ],
  templateUrl: './detailed-history-modal.component.html',
  styleUrl: './detailed-history-modal.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetailedHistoryModalComponent {
  isOpen = false;

  @Input() selectedHistoryData?: any;
  @Output() isModalClosed: any = new EventEmitter<boolean>();

  openModal() {
    this.isOpen = true;
  }

  closeModal() {
    this.isOpen = false;
    this.isModalClosed.emit(true);
  }

  setHistoryData(data: any){
    this.selectedHistoryData = data;
  }
}
