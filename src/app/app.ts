import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './layout/header/header';
import {FooterComponent} from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <c-header />
    <main>
      <router-outlet></router-outlet>
    </main>
    <c-footer />
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    main {
      flex: 1;
      padding-top: 72px;
    }
  `]
})
export class App {
  protected readonly title = signal('oConde Dev');
}
