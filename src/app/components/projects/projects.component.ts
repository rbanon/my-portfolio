import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoPipe } from '@jsverse/transloco';
import { PROJECTS_DATA, Project } from './projects.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslocoPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects: Project[] = PROJECTS_DATA;
}
