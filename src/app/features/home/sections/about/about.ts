import { Component, inject } from '@angular/core';
import { ABOUT_STATS } from '../../../../core/constants/portfolio-data.constants';
import { LanguageService } from '../../../../core/i18n/language.service';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  imports: [SectionHeading, RevealOnScrollDirective],
  templateUrl: './about.html',
})
export class About {
  protected readonly i18n = inject(LanguageService);
  protected readonly stats = ABOUT_STATS;
}
