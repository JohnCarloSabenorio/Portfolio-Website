import { Component, signal } from '@angular/core';
import { CategoryComponent } from './category/category.component';
import { SkillsService } from './skills.service';
import { Skill } from './skill.model';
import { NgForOf } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';

@Component({
  selector: 'app-skills',
  imports: [CategoryComponent, NgForOf, BadgeComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  selectedCategory = signal('');
  allSkills: { [key: string]: Skill[] } = {};

  categories: string[] = [];

  constructor(private skillsService: SkillsService) {
    this.allSkills = skillsService.getCategorizedSkills();
    this.categories = Object.keys(this.allSkills);

    this.selectedCategory.set(this.categories[0]);
  }

  changeSelectedCategory(idx: number) {
    this.selectedCategory.set(this.categories[idx]);
  }

  getFilteredCategory(category: String) {
    return this.skillsService.getFilteredCategory(category);
  }
  getFilteredSubcategory(subCategory: String) {
    return this.skillsService.getFilteredSubcategory(subCategory);
  }
}
