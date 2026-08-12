import { Component, Input, inject } from '@angular/core';
import { Project } from '../../models/project.model';
import { TechnologyBadge } from '../technology-badge/technology-badge';
import { LanguageService } from '../../../core/i18n/language.service';

@Component({
  selector: 'app-project-card',
  imports: [TechnologyBadge],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;

  protected readonly i18n = inject(LanguageService);
}
