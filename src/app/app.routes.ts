import { Routes } from '@angular/router';
import { NotAuthenticatedGuard } from './auth/guards/not-authenticated.guard';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes'),
    canMatch: [
      NotAuthenticatedGuard
    ]
  },
  {
    path: 'users',
    loadChildren: () => import('./users/user.routes'),
  },
  {
    path: 'leads',
    loadChildren: () => import('./leads/lead.routes'),
  },
  {
    path: 'lead-status',
    loadChildren: () => import('./lead-status/lead-status.routes'),
  }
];