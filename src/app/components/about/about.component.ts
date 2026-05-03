import { Component, inject, computed } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { toSignal } from '@angular/core/rxjs-interop';
import { ThemeService } from '../../services/theme.service';
import { ABOUT_IMAGE, ABOUT_CERTIFICATIONS, Certification } from './about.data';

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
  readonly themeService = inject(ThemeService);

  readonly image = ABOUT_IMAGE;
  readonly certifications: Certification[] = ABOUT_CERTIFICATIONS;

  readonly paragraphs = computed(() => {
    void this.activeLang();
    return this.transloco.translate<string[]>('about.paragraphs');
  });

  get logoSrc(): string {
    return this.themeService.theme() === 'dark'
      ? 'assets/svg/rb-logo-white.svg'
      : 'assets/svg/rb-logo-black.svg';
  }
}
