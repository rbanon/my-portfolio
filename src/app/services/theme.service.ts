import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  private readonly DARK_CLASS = 'dark';
  private readonly LIGHT_CLASS = 'light';
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor() {
    this.initTheme();
  }

  /**
   * Initialize theme based on localStorage or system preference
   */
  private initTheme(): void {
    if (!this.isBrowser) return;

    const savedTheme = localStorage.getItem(this.THEME_KEY);

    if (savedTheme) {
      this.setTheme(savedTheme as 'dark' | 'light');
    } else {
      // Detect system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark ? 'dark' : 'light');
    }
  }

  /**
   * Set the theme and update DOM
   */
  setTheme(theme: 'dark' | 'light'): void {
    if (!this.isBrowser) return;

    const html = document.documentElement;

    // Remove both classes first
    html.classList.remove(this.DARK_CLASS, this.LIGHT_CLASS);

    // Add the selected theme class
    html.classList.add(theme);

    // Persist to localStorage
    localStorage.setItem(this.THEME_KEY, theme);
  }

  /**
   * Get the current theme
   */
  getCurrentTheme(): 'dark' | 'light' {
    if (!this.isBrowser) return 'dark';

    return document.documentElement.classList.contains(this.DARK_CLASS)
      ? 'dark'
      : 'light';
  }

  /**
   * Toggle between dark and light theme
   */
  toggleTheme(): void {
    const current = this.getCurrentTheme();
    this.setTheme(current === 'dark' ? 'light' : 'dark');
  }
}
