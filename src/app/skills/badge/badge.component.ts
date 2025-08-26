import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
})
export class BadgeComponent {
  @Input({ required: true }) image!: string;
  @Input({ required: true }) alt!: string;
  @Input({ required: true }) label!: string;
}
