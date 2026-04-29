import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  private themeService = inject(ThemeService);
  private sanitizer = inject(DomSanitizer);

  isMenuOpen = false;
  currentTheme = this.themeService.getCurrentTheme();
  currentLang = 'en'; // Temporarily hardcoded
  activeTab = 'hero'; // Default to hero tab

  tabs = [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  @Output() tabChange = new EventEmitter<string>();

  /**
   * Switch to a tab
   */
  switchTab(tabId: string): void {
    this.activeTab = tabId;
    this.tabChange.emit(tabId);
  }

  /**
   * Toggle theme between dark and light
   */
  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.currentTheme = this.themeService.getCurrentTheme();
  }

  /**
   * Set language
   */
  setLanguage(lang: string): void {
    // Temporarily disabled
    console.log(`Language switch to ${lang} disabled for debugging`);
  }

  /**
   * Toggle mobile menu
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Close mobile menu
   */
  closeMenu(): void {
    this.isMenuOpen = false;
  }

  /**
   * Get theme icon SVG
   */
  getThemeIcon(): SafeHtml {
    const svg = this.currentTheme === 'dark'
      ? this.sunIcon
      : this.moonIcon;
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  private readonly sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;

  private readonly moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
}
