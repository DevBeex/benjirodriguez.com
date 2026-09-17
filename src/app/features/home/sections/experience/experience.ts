import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../../../core/i18n/language.service';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { TechnologyBadge } from '../../../../shared/components/technology-badge/technology-badge';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-experience',
  imports: [SectionHeading, TechnologyBadge, RevealOnScrollDirective],
  templateUrl: './experience.html',
})
export class ExperienceSection {
  protected readonly i18n = inject(LanguageService);
  protected readonly experiences = computed(() => this.i18n.t().experiences);
}
