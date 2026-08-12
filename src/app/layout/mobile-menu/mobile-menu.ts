import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  CV_FILENAME,
  CV_PATH,
  NAV_ITEMS,
} from '../../core/constants/navigation.constants';
import { Button } from '../../shared/components/buttons/button';

@Component({
  selector: 'app-mobile-menu',
  imports: [Button],
  templateUrl: './mobile-menu.html',
})
export class MobileMenu {
  @Input({ required: true }) open = false;
  @Output() closed = new EventEmitter<void>();

  protected readonly navItems = NAV_ITEMS;
  protected readonly cvPath = CV_PATH;
  protected readonly cvFilename = CV_FILENAME;

  protected onNavigate(): void {
    this.closed.emit();
  }
}
