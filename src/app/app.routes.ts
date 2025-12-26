import { Routes } from '@angular/router';
import { AppLayout } from './layout/component/app.layout';
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
    path: '',
    component: AppLayout,
  },
];