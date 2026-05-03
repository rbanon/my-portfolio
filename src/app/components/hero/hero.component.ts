import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoPipe } from '@jsverse/transloco';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslocoPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly themeService = inject(ThemeService);
  isLoading = false;
}
