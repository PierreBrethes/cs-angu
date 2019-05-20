import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { SpylistComponent } from './spylist/spylist.component';
import { Interceptor } from '../shared/models/interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

const dashboardModuleRoutes: Routes = [
    {
        path: 'dashboard', //<---- parent component declared here
        component: DashboardComponent,
        children: [
            //<---- child components declared here
            {
                path: 'feed',
                component: FeedComponent
            },
            {
                path: 'list',
                component: SpylistComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        FeedComponent,
        DashboardComponent,
        DashboardMenuComponent,
        SpylistComponent
    ],
    imports: [CommonModule, RouterModule.forChild(dashboardModuleRoutes)],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: Interceptor,
            multi: true
        }
    ],
    exports: [RouterModule]
})
export class DashboardModule {}
