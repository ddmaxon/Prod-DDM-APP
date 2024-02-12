import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-pagenotfound',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    MatIcon
  ],
  templateUrl: './pagenotfound.component.html',
  styleUrl: './pagenotfound.component.scss'
})
export class PagenotfoundComponent {

  goBack(){
    window.history.back();
  }
}
