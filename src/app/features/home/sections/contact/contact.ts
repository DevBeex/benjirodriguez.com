import { Component, inject } from '@angular/core';
import { CONTACT_LINKS } from '../../../../core/constants/social-links.constants';
import { LanguageService } from '../../../../core/i18n/language.service';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { RevealOnScrollDirective } from '../../../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact',
  imports: [SectionHeading, RevealOnScrollDirective],
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly i18n = inject(LanguageService);
  protected readonly links = CONTACT_LINKS;
}
