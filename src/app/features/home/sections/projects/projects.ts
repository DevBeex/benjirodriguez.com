import { Component, inject } from '@angular/core';
import { FEATURED_PROJECTS } from '../../../../core/constants/portfolio-data.constants';
import { LanguageService } from '../../../../core/i18n/language.service';
import { ProjectCard } from '../../../../shared/components/project-card/project-card';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-projects',
  imports: [SectionHeading, ProjectCard, RevealOnScrollDirective],
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly i18n = inject(LanguageService);
  protected readonly projects = FEATURED_PROJECTS;
}
