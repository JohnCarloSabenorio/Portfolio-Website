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
import * as AOS from 'aos';

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
    AOS.init({
      duration: 1200,
      once: true,
    });
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const sections = document.querySelectorAll('.app-section');

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                this.viewedComponent = entry.target.id;
                console.log('Changed to:', this.viewedComponent);
              }
            });
          },
          {
            threshold: 0.25, // lower so intro can also be counted
            rootMargin: '0px 0px -20% 0px',
          }
        );

        sections.forEach((section) => observer.observe(section));

        // 👇 Manually set intro as default active
        const first = sections[0] as HTMLElement;
        if (first) {
          this.viewedComponent = first.id;
          console.log('Initially set to:', this.viewedComponent);
        }
      }, 0);
    }
  }

  setViewedComponent(str: string) {
    console.log('the string:', str);
    this.viewedComponent = str;
  }
}
