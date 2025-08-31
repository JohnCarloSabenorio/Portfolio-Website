import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input() viewedComponent?: string;
  selectedOpt: number = 0;

  setSelectedOpt(n: number) {
    this.selectedOpt = n;
  }
}
