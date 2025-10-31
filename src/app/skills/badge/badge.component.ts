import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.css',
})
export class BadgeComponent {
  @Input({ required: true }) image!: String;
  @Input({ required: true }) alt!: String;
  @Input({ required: true }) label!: String;
  @Input({ required: true }) categoryIndex!: number;
  @Input({ required: true }) selectedCategory!: number;
}
