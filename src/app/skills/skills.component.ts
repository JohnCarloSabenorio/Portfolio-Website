import { Component } from '@angular/core';
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
  languages: Skill[] = [];
  frameworks: Skill[] = [];
  databases: Skill[] = [];
  deployment: Skill[] = [];
  datascience: Skill[] = [];
  design: Skill[] = [];
  tools: Skill[] = [];

  categories: String[] = [];

  constructor(private skillsService: SkillsService) {
    this.languages = this.getFilteredCategory('Programming Languages');
    this.frameworks = this.getFilteredCategory('Frameworks & Libraries');
    this.databases = this.getFilteredCategory('Databases & Storage');
    this.deployment = this.getFilteredCategory('Deployment & Hosting');
    this.datascience = this.getFilteredCategory(
      'Data Science & Machine Learning'
    );
    this.design = this.getFilteredCategory('Design & UI/UX');
    this.tools = this.getFilteredCategory('Collaboration & Productivity Tools');
    this.categories = skillsService.getCategories();

    console.log('TOOLS:', this.tools);
    console.log('DESIGN:', this.design);
    console.log('Categories:', this.categories);
  }

  getFilteredCategory(category: string) {
    return this.skillsService.getFilteredCategory(category);
  }
  getFilteredSubcategory(subCategory: string) {
    return this.skillsService.getFilteredSubcategory(subCategory);
  }
}
