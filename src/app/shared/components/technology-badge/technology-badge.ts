import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-technology-badge',
  templateUrl: './technology-badge.html',
})
export class TechnologyBadge {
  @Input({ required: true }) label!: string;
}
