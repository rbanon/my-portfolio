import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@jsverse/transloco';
import { map } from 'rxjs';

export type Lang = 'en' | 'es';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly LANG_KEY = 'portfolio-language';
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly transloco = inject(TranslocoService);

  readonly lang = toSignal(
    this.transloco.langChanges$.pipe(map(l => l as Lang)),
    { initialValue: this.transloco.getActiveLang() as Lang }
  );

  constructor() {
    const saved = this.isBrowser ? localStorage.getItem(this.LANG_KEY) : null;
    const initial: Lang =
      saved === 'en' || saved === 'es' ? saved
      : this.isBrowser && navigator.language.startsWith('es') ? 'es'
      : 'en';
    this.transloco.setActiveLang(initial);
  }

  getCurrentLanguage(): Lang {
    return this.transloco.getActiveLang() as Lang;
  }

  setLanguage(lang: Lang): void {
    if (this.isBrowser) localStorage.setItem(this.LANG_KEY, lang);
    this.transloco.setActiveLang(lang);
  }

  getSupportedLanguages(): Lang[] {
    return ['en', 'es'];
  }
}
