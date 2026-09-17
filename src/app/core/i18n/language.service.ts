import {
  Injectable,
  PLATFORM_ID,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { EN } from './translations/en';
import { ES } from './translations/es';
import { LanguageCode, Translations } from './translations.model';

const DICTIONARY: Record<LanguageCode, Translations> = {
  es: ES,
  en: EN,
};

const STORAGE_KEY = 'lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);

  readonly language = signal<LanguageCode>('es');

  readonly t = computed(() => DICTIONARY[this.language()]);

  constructor() {
    afterNextRender(() => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'es' || stored === 'en') {
        this.setLanguage(stored);
      }
    });
  }

  setLanguage(code: LanguageCode): void {
    this.language.set(code);

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    localStorage.setItem(STORAGE_KEY, code);
    document.documentElement.lang = code;
  }

  toggle(): void {
    this.setLanguage(this.language() === 'es' ? 'en' : 'es');
  }
}
