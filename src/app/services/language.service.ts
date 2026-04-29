import { Injectable, inject, PLATFORM_ID, LOCALE_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly LANG_KEY = 'portfolio-language';
  private readonly DEFAULT_LANG = 'en';
  private readonly SUPPORTED_LANGS = ['en', 'es'];
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private currentLocale = inject(LOCALE_ID);

  constructor() {
    this.initLanguage();
  }

  /**
   * Initialize language based on localStorage or browser preference
   */
  private initLanguage(): void {
    if (!this.isBrowser) return;

    // Get the current locale (e.g., "en-US" -> "en")
    const currentLang = this.currentLocale.split('-')[0];

    const savedLang = localStorage.getItem(this.LANG_KEY);

    if (savedLang && this.SUPPORTED_LANGS.includes(savedLang)) {
      // Check if current locale matches saved language
      if (currentLang !== savedLang) {
        // Only redirect if we're not already on the correct path
        const currentPath = window.location.pathname;
        const expectedPath = savedLang === 'es' ? '/es' : '/';
        if (currentPath !== expectedPath) {
          this.redirectToLanguage(savedLang);
        }
      }
      return;
    }

    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    const lang = this.SUPPORTED_LANGS.includes(browserLang) ? browserLang : this.DEFAULT_LANG;

    localStorage.setItem(this.LANG_KEY, lang);

    // Only redirect if we're not already on the correct path
    const currentPath = window.location.pathname;
    const expectedPath = lang === 'es' ? '/es' : '/';
    if (currentPath !== expectedPath) {
      this.redirectToLanguage(lang);
    }
  }

  /**
   * Get the current language
   */
  getCurrentLanguage(): string {
    return this.currentLocale.split('-')[0] || this.DEFAULT_LANG;
  }

  /**
   * Set the language and redirect to the correct build
   */
  setLanguage(lang: string): void {
    if (!this.isBrowser || !this.SUPPORTED_LANGS.includes(lang)) return;

    localStorage.setItem(this.LANG_KEY, lang);
    this.redirectToLanguage(lang);
  }

  /**
   * Redirect to the correct language build
   */
  private redirectToLanguage(lang: string): void {
    if (!this.isBrowser) return;

    const currentPath = window.location.pathname;
    const expectedPath = lang === 'es' ? '/es' : '/';

    // Only redirect if we're not already on the correct path
    if (currentPath !== expectedPath) {
      window.location.href = expectedPath;
    }
  }

  /**
   * Get supported languages
   */
  getSupportedLanguages(): string[] {
    return [...this.SUPPORTED_LANGS];
  }
}
