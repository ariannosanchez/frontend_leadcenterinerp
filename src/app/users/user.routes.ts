import { Routes } from '@angular/router';
import { UserList } from './pages/user-list/user-list';
import { AppLayout } from '../layout/component/app.layout';
import { UserDetail } from './pages/user-detail/user-detail';
import { IsAuthenticatedGuard } from '../auth/guards/is-authenticated.guard';

export const userRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        canMatch: [IsAuthenticatedGuard],
        children: [
            {
                path: 'list',
                component: UserList
            },
            {
                path: 'detail/:id',
                component: UserDetail
            },
            {
                path: '**',
                redirectTo: 'list',
            }
        ],
    },
];

export default userRoutes;