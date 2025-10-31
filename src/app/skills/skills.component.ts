import { Component, signal } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { SkillsService } from './skills.service';
import { Skill } from './skill.model';
import { NgForOf, NgClass } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';

@Component({
  selector: 'app-skills',
  imports: [CategoryComponent, NgForOf, BadgeComponent, NgClass],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  selectedCategory = 1;
  allSkills: Skill[] = [];

  categories: { [key: number]: String };
  categoryKeys: number[] = [];

  constructor(private skillsService: SkillsService) {
    this.allSkills = skillsService.getAllSkills();
    this.categories = skillsService.getCategories();

    this.categoryKeys = Object.keys(this.categories).map((key) => Number(key));
  }

  changeSelectedCategory(idx: number) {
    this.selectedCategory = idx;
  }
  changeSelectedCategoryEvent(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedKey = selectElement.value;

    this.selectedCategory = +selectedKey;
  }

  getFilteredCategory(category: String) {
    return this.skillsService.getFilteredCategory(category);
  }
  getFilteredSubcategory(subCategory: String) {
    return this.skillsService.getFilteredSubcategory(subCategory);
  }
}
