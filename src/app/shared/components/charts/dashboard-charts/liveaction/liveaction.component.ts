import { Component, Input, OnInit } from '@angular/core';
import { TimechartComponent } from './timechart/timechart.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RequestService } from '../../../../core/request.service';
import { CommonModule } from '@angular/common';
import { ExecchartComponent } from './execchart/execchart.component';

@Component({
  selector: 'app-liveaction',
  standalone: true,
  imports: [
    CommonModule,
    TimechartComponent,
    ExecchartComponent,
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
  isRequestDone: boolean = false;

  constructor(
    private requestService: RequestService
  ){}

  async ngOnInit() {
    this.isRequestDone = false;
    this.data = await this.getLiveactionData();
    this.isRequestDone = true;
  }

  async getLiveactionData() {
    return await this.requestService.GET('/csv/recent/timeline');
  }

  changeHref(route:string){
    window.location.href = route;
  }
}
