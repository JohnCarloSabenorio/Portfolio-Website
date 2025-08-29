import { Component } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Project } from './project.model';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-projects',
  imports: [NgForOf],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  allProjects: Project[] = [];
  constructor(private projectsService: ProjectsService) {
    this.allProjects = projectsService.getAllProjects();
    console.log('All Projects:', this.allProjects);
  }
}
