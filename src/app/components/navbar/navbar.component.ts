import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TranslocoPipe } from '@jsverse/transloco';
import { ThemeService } from '../../services/theme.service';
import { LanguageService, Lang } from '../../services/language.service';
import { NAV_TABS, NavTab } from './navbar.data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, TranslocoPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  readonly themeService = inject(ThemeService);
  private readonly languageService = inject(LanguageService);
  private sanitizer = inject(DomSanitizer);

  isMenuOpen = false;
  readonly currentLang = this.languageService.lang;
  activeTab = 'hero';
  readonly tabs: NavTab[] = NAV_TABS;

  @Output() tabChange = new EventEmitter<string>();

  switchTab(tabId: string): void {
    this.activeTab = tabId;
    this.tabChange.emit(tabId);
  }

  goHome(event: Event): void {
    event.preventDefault();
    this.switchTab('hero');
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  setLanguage(lang: Lang): void {
    this.languageService.setLanguage(lang);
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  downloadCV(): void {
    window.print();
  }

  getThemeIcon(): SafeHtml {
    const svg = this.themeService.theme() === 'dark' ? this.sunIcon : this.moonIcon;
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  private readonly sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
  private readonly moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
}
