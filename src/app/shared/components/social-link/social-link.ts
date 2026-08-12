import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.html',
})
export class SocialLinkComponent {
  @Input({ required: true }) href!: string;
  @Input({ required: true }) icon!: 'github' | 'linkedin' | 'email';
  @Input() label = '';
  @Input() showLabel = false;
}
