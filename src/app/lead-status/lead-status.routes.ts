import { Routes } from '@angular/router';
import { AppLayout } from '../layout/component/app.layout';
import { IsAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';
import { LeadStatusList } from './pages/lead-status-list/lead-status-list';
import { LeadStatusDetail } from './pages/lead-status-detail/lead-status-detail';

export const leadStatusRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        canMatch: [IsAuthenticatedGuard],
        children: [
            {
                path: 'list',
                component: LeadStatusList
            },
            {
                path: 'detail/:id',
                component: LeadStatusDetail
            },
            {
                path: '**',
                redirectTo: 'list',
            }
        ],
    },
];

export default leadStatusRoutes;