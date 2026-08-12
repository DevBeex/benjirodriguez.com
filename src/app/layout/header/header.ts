import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  CV_FILENAME,
  CV_PATH,
  NAV_ITEMS,
} from '../../core/constants/navigation.constants';
import { LanguageService } from '../../core/i18n/language.service';
import { Button } from '../../shared/components/buttons/button';

@Component({
  selector: 'app-header',
  imports: [Button],
  templateUrl: './header.html',
})
export class Header {
  @Input() menuOpen = false;
  @Output() menuToggle = new EventEmitter<void>();

  protected readonly navItems = NAV_ITEMS;
  protected readonly cvPath = CV_PATH;
  protected readonly cvFilename = CV_FILENAME;
  protected readonly i18n = inject(LanguageService);
}
