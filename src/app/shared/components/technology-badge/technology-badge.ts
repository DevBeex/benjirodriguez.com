import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-technology-badge',
  imports: [NgClass],
  templateUrl: './technology-badge.html',
})
export class TechnologyBadge {
  @Input({ required: true }) label!: string;
  @Input() featured = false;
}
