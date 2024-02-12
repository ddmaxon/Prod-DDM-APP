import { Component, OnInit } from '@angular/core';
import { LiveactionComponent } from '../../../shared/components/charts/dashboard-charts/liveaction/liveaction.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from '../../../shared/core/request.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    LiveactionComponent,
    HttpClientModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers: []
})
export class MainComponent {

}
