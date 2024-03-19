import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-block-notification',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './block-notification.component.html',
  styleUrl: './block-notification.component.scss'
})
export class BlockNotificationComponent {

}
