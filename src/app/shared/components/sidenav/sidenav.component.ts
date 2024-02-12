import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BlockNotificationComponent } from './block-notification/block-notification.component';
import { NavItemComponent } from './nav-item/nav-item.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    BlockNotificationComponent,
    NavItemComponent
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  urlSortedBG = "";

  constructor(
    private route: Router
  ) { this.checkSite() }

  checkSite() {
    if (this.route.url === '/') {
      this.urlSortedBG = "buttonBG"
    } else {
      this.urlSortedBG = ""
    }
  }
}
