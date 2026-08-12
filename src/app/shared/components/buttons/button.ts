import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

export type ButtonVariant = 'primary' | 'outline' | 'ghost';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  host: {
    class: 'inline-flex max-w-full',
  },
})
export class Button {
  @Input() variant: ButtonVariant = 'primary';
  /** When set, renders as a link. */
  @Input() href?: string;
  /** Pass `true` or a filename to force download. */
  @Input() download: boolean | string = false;
  @Input() target?: '_blank' | '_self';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() fullWidth = false;

  protected readonly baseClass =
    'inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl px-5 py-3 text-sm font-semibold leading-none no-underline transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400';

  protected readonly variants: Record<ButtonVariant, string> = {
    primary:
      'bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-600/20',
    outline:
      'border border-white/20 bg-transparent text-ink-100 hover:border-brand-400 hover:text-brand-300',
    ghost: 'bg-white/5 text-ink-100 hover:bg-white/10',
  };

  protected get downloadAttr(): string | null {
    if (this.download === false) {
      return null;
    }

    return typeof this.download === 'string' && this.download.length > 0
      ? this.download
      : '';
  }

  protected get isLink(): boolean {
    return !!this.href;
  }
}
