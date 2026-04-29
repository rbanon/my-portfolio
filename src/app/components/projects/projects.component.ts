import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  demo?: string;
  isComingSoon?: boolean;
  type?: string;
  featured?: boolean;
  year?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent implements OnInit {
  isLoading = false; // Temporarily disabled for debugging
  
  projects: Project[] = [
    {
      name: 'GitHub Dashboard',
      description: 'Real-time GitHub analytics dashboard built with Vue 3 + TypeScript. Search any username to see repositories, languages (donut chart), recent activity and stats.',
      tech: ['Vue 3', 'TypeScript', 'Axios', 'Chart.js', 'SCSS', 'GitHub REST API'],
      github: 'https://github.com/rbanon/github-dashboard',
      live: 'https://github-dashboard-rbm.vercel.app/',
      type: 'Open Source',
      year: '2026',
      featured: true
    },
    {
      name: 'Personal Portfolio',
      description: 'This portfolio you\'re viewing. Angular + TypeScript with dark/light mode, EN/ES i18n, smooth scroll, responsive design and modern animations.',
      tech: ['Angular', 'TypeScript', 'SCSS', '@angular/localize'],
      github: 'https://github.com/rbanon/portfolio',
      live: window.location.href,
      type: 'Personal',
      year: '2026'
    },
    {
      name: 'Coming soon',
      description: '',
      tech: [],
      isComingSoon: true,
      type: 'In progress'
    }
  ];

  showAll = true;

  get filteredProjects(): Project[] {
    return this.showAll ? this.projects : this.projects.filter(p => p.featured);
  }

  ngOnInit(): void {
    console.log('Projects component initialized');
  }
}