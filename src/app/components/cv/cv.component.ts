import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { toSignal } from '@angular/core/rxjs-interop';
import { EXPERIENCE_DATA } from '../experience/experience.data';
import { SKILLS_DATA, SkillCategory } from '../skills/skills.data';
import { PROJECTS_DATA, Project } from '../projects/projects.data';
import { ABOUT_CERTIFICATIONS, Certification } from '../about/about.data';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, TranslocoPipe],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent {
  private readonly transloco = inject(TranslocoService);
  private readonly activeLang = toSignal(this.transloco.langChanges$, {
    initialValue: this.transloco.getActiveLang(),
  });

  readonly skillCategories: SkillCategory[] = SKILLS_DATA.filter(c => c.key !== 'collaboration');
  readonly realProjects: Project[] = PROJECTS_DATA.filter(p => !p.isComingSoon);
  readonly certifications: Certification[] = ABOUT_CERTIFICATIONS;

  readonly experiences = computed(() => {
    void this.activeLang();
    return EXPERIENCE_DATA.map(item => ({
      ...item,
      tasks: this.transloco.translate<string[]>(`experience.jobs.${item.key}.tasks`),
    }));
  });

  readonly profile = computed(() => {
    void this.activeLang();
    return this.transloco.translate<string[]>('about.paragraphs').slice(0, 2).join(' ');
  });

  tagList(cat: SkillCategory): string {
    return cat.tags.map(t => t.label).join(', ');
  }
}
