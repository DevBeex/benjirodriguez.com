import { Component, inject } from '@angular/core';
import {
  CV_FILENAME,
  CV_PATH,
} from '../../../../core/constants/navigation.constants';
import { HERO_TECHS } from '../../../../core/constants/portfolio-data.constants';
import { SOCIAL_LINKS } from '../../../../core/constants/social-links.constants';
import { LanguageService } from '../../../../core/i18n/language.service';
import { Button } from '../../../../shared/components/buttons/button';
import { SocialLinkComponent } from '../../../../shared/components/social-link/social-link';
import { TechnologyBadge } from '../../../../shared/components/technology-badge/technology-badge';

@Component({
  selector: 'app-hero',
  imports: [Button, SocialLinkComponent, TechnologyBadge],
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly i18n = inject(LanguageService);
  protected readonly cvPath = CV_PATH;
  protected readonly cvFilename = CV_FILENAME;
  protected readonly socialLinks = SOCIAL_LINKS;
  protected readonly heroTechs = HERO_TECHS;
}
