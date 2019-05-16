import { Component, OnInit } from '@angular/core';
import { DashboardMenuService } from './dashboard-menu.service';
import { DataTransitService } from '../../core/login/dataShareComponent/data-transit.service';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
    selector: 'app-dashboard-menu',
    templateUrl: './dashboard-menu.component.html',
    styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent implements OnInit {
    tokenFb: string;
    accountList = [];
    active = localStorage.getItem('businessAccount');

    constructor(
        private dashboardMenuService: DashboardMenuService,
        private dataservice: DataTransitService,
        private router: Router
    ) {}

    businessAccountList() {
        this.tokenFb = localStorage.getItem('token');
        this.dashboardMenuService
            .getUserBusinessAccounts(this.tokenFb)
            .subscribe(result => {
                result.forEach(json => {
                    this.accountList.push(json);
                });
            });
    }

    setBusinessAccount(id: string) {
        this.active = id;
        localStorage.setItem('businessAccount', id);
        this.dataservice.reloadSpying(id);
        this.router.navigate(['/dashboard/feed']);
    }

    ngOnInit() {
        this.businessAccountList();
    }
}
