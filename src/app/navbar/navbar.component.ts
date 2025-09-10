import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() viewedComponent?: string;
  selectedOpt: number = 0;
  @Output() clickEvent = new EventEmitter<string>();

  setSelectedOpt(n: number) {
    this.selectedOpt = n;
  }
}
