import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  constructor(private translate: TranslateService) { }

  async init(lang: string = 'pt-br') {
    try {
      const response = await fetch(`assets/i18n/${lang}.json`);
      if (!response.ok) throw new Error('Lang not found');

      const translations = await response.json();
      this.translate.setTranslation(lang, translations, true);
      this.translate.use(lang);
    } catch {
      if (lang !== 'pt-br') {
        await this.init('pt-br');
      }
    }
  }

  changeLang(lang: string) {
    localStorage.setItem('lang', lang);
    this.init(lang);
  }

  t(key: string, params?: Record<string, any>): string {
    return this.translate.instant(key, params);
  }
}
