import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoPipe } from '@jsverse/transloco';
import { SKILLS_DATA, SkillCategory } from './skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, TranslocoPipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  readonly categories: SkillCategory[] = SKILLS_DATA;
}
