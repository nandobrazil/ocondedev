import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent)
  },
  {
    path: 'resume',
    loadComponent: () => import('./pages/resume/resume').then(m => m.ResumeComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
