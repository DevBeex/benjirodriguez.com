import { Component, inject } from '@angular/core';
import { SKILL_CATEGORIES } from '../../../../core/constants/portfolio-data.constants';
import { LanguageService } from '../../../../core/i18n/language.service';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { TechnologyBadge } from '../../../../shared/components/technology-badge/technology-badge';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-skills',
  imports: [SectionHeading, TechnologyBadge, RevealOnScrollDirective],
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly i18n = inject(LanguageService);
  protected readonly categories = SKILL_CATEGORIES;
}
