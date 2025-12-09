import {Component, HostListener} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {LocalStorageService} from '../../core/services/local-storage.service';
import {IStorageKeys} from '../../core/interfaces/IStorageKeys';

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
  storageKeys: IStorageKeys;
  isScrolled = false;

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.storageKeys = this.localStorageService.getStorage();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleTheme() {
    this.storageKeys.lightMode = !this.storageKeys.lightMode;
    this.localStorageService.toggleTheme(this.storageKeys.lightMode)
  }
}
