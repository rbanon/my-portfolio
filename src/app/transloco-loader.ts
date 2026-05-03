import { Injectable } from '@angular/core';
import { TranslocoLoader, Translation } from '@jsverse/transloco';
import { Observable, of } from 'rxjs';
import en from '../assets/i18n/en.json';
import es from '../assets/i18n/es.json';

@Injectable({ providedIn: 'root' })
export class TranslocoStaticLoader implements TranslocoLoader {
  getTranslation(lang: string): Observable<Translation> {
    return of(lang === 'es' ? es : en);
  }
}
