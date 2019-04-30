import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed/feed.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';

@NgModule({
    declarations: [FeedComponent, DashboardComponent, DashboardMenuComponent],
    imports: [CommonModule]
})
export class DashboardModule {}
