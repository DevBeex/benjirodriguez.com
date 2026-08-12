import { Directive, ElementRef, OnDestroy, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appRevealOnScroll]',
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const node = this.el.nativeElement;
    node.classList.add(
      'opacity-0',
      'translate-y-4',
      'transition',
      'duration-700',
      'ease-out',
    );

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            node.classList.remove('opacity-0', 'translate-y-4');
            node.classList.add('opacity-100', 'translate-y-0');
            this.observer?.unobserve(node);
          }
        }
      },
      { threshold: 0.12 },
    );

    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
