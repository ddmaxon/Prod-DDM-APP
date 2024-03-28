import { Component, OnInit } from '@angular/core';
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
export class ChartNavComponent implements OnInit {
  current: any = {
    name: 'Dashboard',
    link: '/dashboard',
    icon: 'live_tv'
  }

  routes: Array<{
    name: string,
    link: string,
    icon: string,
    description: string,
    isDisabled: boolean
  }> = [
    {
      name: 'Dashboard',
      link: '/dashboard',
      icon: 'dashboard',
      description: 'The dashboard is an overview of the current progress of the current tests of all motors. It shows the current status of the motors and the progress of the tests.',
      isDisabled: false
    },
    {
      name: 'History',
      link: '/dashboard/history',
      icon: 'history',
      description: 'The history page shows the history of all tests that have been run in the past. It shows the results of the tests and the progress of the tests.',
      isDisabled: false
    },
    {
      name: 'Settings',
      link: '/dashboard/settings',
      icon: 'settings',
      description: 'The settings page allows the user to change the settings of the application. This includes changing the theme, the language, and other settings.',
      isDisabled: true
    }
  ];
  constructor(
    private router: Router
  ){}

  ngOnInit() {
    this.current = this.routes.find(route => route.link === this.router.url) || this.routes[0];
  }

  changeRoute(route: any): void {
    this.current = route;
  }

  isCurrent(route: any): string {
    if(this.current === route){
      return 'inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-gray-500 sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:border-gray-300 cursor-pointer';
    }
    return 'inline-flex items-center h-10 px-2 py-2 -mb-px text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none hover:border-gray-300 cursor-pointer';
  }
}
