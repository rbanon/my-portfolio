import { Component, inject, computed } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { toSignal } from '@angular/core/rxjs-interop';
import { ABOUT_CERTIFICATIONS, Certification } from './about.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private readonly transloco = inject(TranslocoService);
  private readonly activeLang = toSignal(this.transloco.langChanges$, {
    initialValue: this.transloco.getActiveLang(),
  });

  readonly certifications: Certification[] = ABOUT_CERTIFICATIONS;

  readonly paragraphs = computed(() => {
    void this.activeLang();
    return this.transloco.translate<string[]>('about.paragraphs');
  });
}
