import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// o site usava HashLocationStrategy (/#/resume); converte links/favoritos
// antigos pro formato de URL limpo antes do router assumir
if (location.hash.startsWith('#/')) {
  history.replaceState(null, '', location.hash.slice(1) + location.search);
}

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
