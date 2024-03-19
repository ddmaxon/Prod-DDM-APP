import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-chart-nav',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatIcon
  ],
  templateUrl: './chart-nav.component.html',
  styleUrl: './chart-nav.component.scss'
})
export class ChartNavComponent {

  constructor(){}
}
