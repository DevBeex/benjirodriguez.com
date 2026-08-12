import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.html',
})
export class SectionHeading {
  @Input({ required: true }) title!: string;
  @Input() icon: 'user' | 'briefcase' | 'folder' | 'layers' | 'mail' = 'user';
  @Input() actionLabel?: string;
  @Input() actionHref?: string;
}
