import { Routes } from '@angular/router';
import { AppLayout } from '../layout/component/app.layout';
import { IsAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';
import { LeadList } from './pages/lead-list/lead-list';

export const leadRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        canMatch: [IsAuthenticatedGuard],
        children: [
            {
                path: 'list',
                component: LeadList
            },
            // {
            //     path: 'detail/:id',
            //     component: UserDetail
            // },
            {
                path: '**',
                redirectTo: 'list',
            }
        ],
    },
];

export default leadRoutes;