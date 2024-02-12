import { Component, Input, OnInit } from '@angular/core';
import { TimechartComponent } from './timechart/timechart.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RequestService } from '../../../../core/request.service';

@Component({
  selector: 'app-liveaction',
  standalone: true,
  imports: [
    TimechartComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './liveaction.component.html',
  styleUrl: './liveaction.component.scss',
  providers: [RequestService]
})
export class LiveactionComponent implements OnInit {
  data: any = {};

  constructor(
    private requestService: RequestService
  ){}

  async ngOnInit() {
    
  }
}
