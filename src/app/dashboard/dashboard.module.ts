import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { SpylistComponent } from './spylist/spylist.component';
import { Interceptor } from '../shared/models/interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        FeedComponent,
        DashboardComponent,
        DashboardMenuComponent,
        SpylistComponent
    ],
    imports: [CommonModule, RouterModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: Interceptor,
            multi: true
        }
    ]
})
export class DashboardModule {}
