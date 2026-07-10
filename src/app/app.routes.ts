import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Fernando Conde — Full-Stack Engineer',
    loadComponent: () => import('./pages/home/home').then((m) => m.HomeComponent),
  },
  {
    path: 'contact',
    title: 'Contato — oconde.dev',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.ContactComponent),
  },
  {
    path: 'resume',
    title: 'Resumo — oconde.dev',
    loadComponent: () => import('./pages/resume/resume').then((m) => m.ResumeComponent),
  },
  {
    path: 'uses',
    title: 'Setup — oconde.dev',
    loadComponent: () => import('./pages/uses/uses').then((m) => m.UsesComponent),
  },
  {
    path: 'not-found',
    title: 'Página não encontrada — oconde.dev',
    loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFoundComponent),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];
