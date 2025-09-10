import { Component, PLATFORM_ID, Inject, Output } from '@angular/core';
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
import { isPlatformBrowser } from '@angular/common';
import { EventEmitter } from 'stream';

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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const sections = document.querySelectorAll('.app-section');

      console.log('app sections:', sections);

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            console.log('the target id:', entry.target.id);

            if (entry.isIntersecting) {
              console.log('app sections:', sections);
              this.viewedComponent = entry.target.id;
              console.log('changed to:', this.viewedComponent);
            }
          });
        },
        {
          threshold: 0.25,
          rootMargin: '0px 0px -20% 0px',
        }
      );

      sections.forEach((section) => observer.observe(section));
    }
  }

  setViewedComponent(str: string) {
    console.log('the string:', str);
    this.viewedComponent = str;
  }
}
