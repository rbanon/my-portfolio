import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EXPERIENCE_DATA, Experience } from '../experience/experience.data';
import { SKILLS_DATA, SkillCategory } from '../skills/skills.data';
import { PROJECTS_DATA, Project } from '../projects/projects.data';
import { ABOUT_DATA, Certification } from '../about/about.data';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent {
  readonly experiences: Experience[] = EXPERIENCE_DATA;

  readonly skillCategories: SkillCategory[] = SKILLS_DATA.filter(
    cat => cat.title !== 'Collaboration'
  );

  readonly realProjects: Project[] = PROJECTS_DATA.filter(p => !p.isComingSoon);

  readonly certifications: Certification[] = ABOUT_DATA.certifications.items;

  readonly profile: string = ABOUT_DATA.profile.paragraphs.slice(0, 2).join(' ');

  tagList(cat: SkillCategory): string {
    return cat.tags.map(t => t.label).join(', ');
  }
}
