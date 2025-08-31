import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { IntroComponent } from './intro/intro.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { Sign } from 'crypto';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    IntroComponent,
    ProjectsComponent,
    SkillsComponent,
    CertificatesComponent,
    ExperienceComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio-website';
  viewedComponent: string = 'intro-section';

  ngAfterViewInit(): void {
    const sections = document.querySelectorAll('.app-section');

    console.log('app sections:', sections);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.viewedComponent = entry.target.id;
            console.log('the viewed component:', this.viewedComponent);
          }
        });
      },
      {
        threshold: 0.6, // 60% of section must be visible
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  setViewedComponent(str: string) {
    this.viewedComponent = str;
  }
}
