import { Component, Signal, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  @Input({ required: true }) label!: String;
  @Input({ required: true }) categoryIndex!: number;
  @Input({ required: true }) selectedCategory!: number;

  @Output() clickEvent = new EventEmitter<number>();

  changeCategory() {
    this.clickEvent.emit(this.categoryIndex);
  }
}
