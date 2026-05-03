import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { toSignal } from '@angular/core/rxjs-interop';
import { EXPERIENCE_DATA, ExperienceItem } from './experience.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TranslocoPipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  private readonly transloco = inject(TranslocoService);
  private readonly activeLang = toSignal(this.transloco.langChanges$, {
    initialValue: this.transloco.getActiveLang(),
  });

  readonly experiences = computed(() => {
    void this.activeLang();
    return EXPERIENCE_DATA.map(item => ({
      ...item,
      tasks: this.transloco.translate<string[]>(`experience.jobs.${item.key}.tasks`),
    }));
  });
}
