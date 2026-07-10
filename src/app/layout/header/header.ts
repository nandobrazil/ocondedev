import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'c-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
  imports: [RouterLink, RouterLinkActive],
})
export class HeaderComponent {
  protected readonly theme = inject(ThemeService);
  protected readonly isScrolled = signal(false);

  protected onWindowScroll() {
    this.isScrolled.set(window.scrollY > 20);
  }
}
