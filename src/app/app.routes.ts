import { Routes } from '@angular/router';

export const routes: Routes = [
  // PUBLIC
  {
    path: '',
    loadComponent: () =>
      import('./public-pages/principal/principal.component').then(
        (m) => m.PrincipalComponent
      ),
  },
  // DEFAULT
  { path: '**', redirectTo: '' },
];
