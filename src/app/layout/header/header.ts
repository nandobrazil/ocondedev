import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'c-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports: [
    RouterLink,
    RouterLinkActive
  ]
})
export class HeaderComponent {
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark', this.isDarkMode);
  }
}
