import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-contextmenu',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './contextmenu.component.html',
  styleUrl: './contextmenu.component.scss'
})
export class ContextmenuComponent implements OnInit {


  @Input() x = 0;
  @Input() y = 0;
  @Input() items: any[] = [];

  xCoord = 0;
  yCoord = 0;

  constructor() { }

  ngOnInit(): void {
    this.xCoord = this.x;
    this.yCoord = this.y;
  }

  getStyleString() {
    return `left: ${this.x}px; top: ${this.y}px;`;
  }
}
