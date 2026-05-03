import { Injectable, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  private readonly DARK_CLASS = 'dark';
  private readonly LIGHT_CLASS = 'light';
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  readonly theme = signal<'dark' | 'light'>('dark');

  constructor() {
    this.initTheme();
  }

  private initTheme(): void {
    if (!this.isBrowser) return;

    const savedTheme = localStorage.getItem(this.THEME_KEY);

    if (savedTheme) {
      this.setTheme(savedTheme as 'dark' | 'light');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark ? 'dark' : 'light');
    }
  }

  setTheme(theme: 'dark' | 'light'): void {
    if (!this.isBrowser) return;

    const html = document.documentElement;
    html.classList.remove(this.DARK_CLASS, this.LIGHT_CLASS);
    html.classList.add(theme);
    localStorage.setItem(this.THEME_KEY, theme);
    this.theme.set(theme);
  }

  getCurrentTheme(): 'dark' | 'light' {
    return this.theme();
  }

  toggleTheme(): void {
    this.setTheme(this.theme() === 'dark' ? 'light' : 'dark');
  }
}
