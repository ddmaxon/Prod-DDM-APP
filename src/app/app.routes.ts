import { Routes } from '@angular/router';
import { HomeComponent } from './feats/home/home.component';
import { DashboardComponent } from './feats/dashboard/dashboard.component';
import { PagenotfoundComponent } from './feats/errors/pagenotfound/pagenotfound.component';
import { HistoryComponent } from './feats/dashboard/history/history.component';
import { MainComponent } from './feats/dashboard/main/main.component';

export const routes: Routes = [
    {
        path: '',
        title: 'DDM - Home',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        title: 'DDM - Dashboard',
        component: DashboardComponent,
        children: [
            {
                path: '',
                title: 'DDM - Dashboard',
                component: MainComponent
            },
            {
                path: 'history',
                title: 'DDM - History',
                component: HistoryComponent
            },
            {
                path: '**',
                title: 'DDM - Error',
                component: PagenotfoundComponent
            }
        ]
    },
    {
        path: '**',
        title: 'DDM - Error',
        component: PagenotfoundComponent
    }
];
