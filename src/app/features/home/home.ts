import { Component, signal } from '@angular/core';
import { Header } from '../../layout/header/header';
import { MobileMenu } from '../../layout/mobile-menu/mobile-menu';
import { Footer } from '../../layout/footer/footer';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { ExperienceSection } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    MobileMenu,
    Footer,
    Hero,
    About,
    ExperienceSection,
    Projects,
    Skills,
    Contact,
  ],
  templateUrl: './home.html',
})
export class Home {
  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
