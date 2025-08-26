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
  selectedCategory: String = '';
  allSkills: { [key: string]: Skill[] } = {};

  skillsArray = [];

  categories: String[] = [];

  constructor(private skillsService: SkillsService) {
    this.allSkills = skillsService.getCategorizedSkills();
    this.categories = Object.keys(this.allSkills);

    this.selectedCategory = this.categories[1];
  }

  changeSelectedCategory() {}

  getFilteredCategory(category: string) {
    return this.skillsService.getFilteredCategory(category);
  }
  getFilteredSubcategory(subCategory: string) {
    return this.skillsService.getFilteredSubcategory(subCategory);
  }
}
