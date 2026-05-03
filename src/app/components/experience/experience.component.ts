import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCE_DATA, Experience } from './experience.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experiences: Experience[] = EXPERIENCE_DATA;
}
