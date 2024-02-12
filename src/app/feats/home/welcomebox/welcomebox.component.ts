import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

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
export class WelcomeboxComponent {

}
