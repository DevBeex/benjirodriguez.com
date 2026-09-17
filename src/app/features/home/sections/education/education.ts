import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../../core/i18n/language.service';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-education',
  imports: [SectionHeading, RevealOnScrollDirective],
  templateUrl: './education.html',
})
export class Education {
  protected readonly i18n = inject(LanguageService);
}
