import { Component, inject } from '@angular/core';
import { EXPERIENCES } from '../../../../core/constants/portfolio-data.constants';
import { LanguageService } from '../../../../core/i18n/language.service';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-experience',
  imports: [SectionHeading, RevealOnScrollDirective],
  templateUrl: './experience.html',
})
export class ExperienceSection {
  protected readonly i18n = inject(LanguageService);
  protected readonly experiences = EXPERIENCES;
}
