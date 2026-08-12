import { Injectable, signal, computed } from '@angular/core';
import { EN } from './translations/en';
import { ES } from './translations/es';
import { LanguageCode, Translations } from './translations.model';

const DICTIONARY: Record<LanguageCode, Translations> = {
  es: ES,
  en: EN,
};

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly language = signal<LanguageCode>('es');

  readonly t = computed(() => DICTIONARY[this.language()]);

  setLanguage(code: LanguageCode): void {
    this.language.set(code);
  }

  toggle(): void {
    this.language.update((current) => (current === 'es' ? 'en' : 'es'));
  }
}
