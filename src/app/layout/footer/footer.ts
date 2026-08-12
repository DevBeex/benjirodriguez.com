import { Component, inject } from '@angular/core';
import { NAV_ITEMS } from '../../core/constants/navigation.constants';
import { SOCIAL_LINKS } from '../../core/constants/social-links.constants';
import { LanguageService } from '../../core/i18n/language.service';
import { SocialLinkComponent } from '../../shared/components/social-link/social-link';

@Component({
  selector: 'app-footer',
  imports: [SocialLinkComponent],
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly navItems = NAV_ITEMS;
  protected readonly socialLinks = SOCIAL_LINKS;
  protected readonly i18n = inject(LanguageService);

  protected get leftLinks() {
    return this.navItems.slice(0, 3);
  }

  protected get rightLinks() {
    return this.navItems.slice(3);
  }
}
