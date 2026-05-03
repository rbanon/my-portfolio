import { Component, inject } from '@angular/core';
import { ABOUT_DATA, AboutSectionData } from './about.data';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly about: AboutSectionData = ABOUT_DATA;
  readonly themeService = inject(ThemeService);

  get logoSrc(): string {
    return this.themeService.theme() === 'dark'
      ? 'assets/svg/rb-logo-white.svg'
      : 'assets/svg/rb-logo-black.svg';
  }
}