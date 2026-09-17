import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  CV_FILENAME,
  CV_PATH,
  NAV_ITEMS,
} from '../../core/constants/navigation.constants';
import { LanguageService } from '../../core/i18n/language.service';
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
  protected readonly i18n = inject(LanguageService);

  protected onNavigate(): void {
    this.closed.emit();
  }
}
