import { Component, inject } from '@angular/core';
import {
  CV_FILENAME,
  CV_PATH,
} from '../../../../core/constants/navigation.constants';
import { SOCIAL_LINKS } from '../../../../core/constants/social-links.constants';
import { LanguageService } from '../../../../core/i18n/language.service';
import { Button } from '../../../../shared/components/buttons/button';
import { SocialLinkComponent } from '../../../../shared/components/social-link/social-link';

@Component({
  selector: 'app-hero',
  imports: [Button, SocialLinkComponent],
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly i18n = inject(LanguageService);
  protected readonly cvPath = CV_PATH;
  protected readonly cvFilename = CV_FILENAME;
  protected readonly socialLinks = SOCIAL_LINKS;
}
