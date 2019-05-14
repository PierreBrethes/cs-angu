import { Component, OnInit } from '@angular/core';
import { DashboardMenuService } from './dashboard-menu.service';

@Component({
    selector: 'app-dashboard-menu',
    templateUrl: './dashboard-menu.component.html',
    styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent implements OnInit {
    tokenFb: string;
    accountList = [];

    constructor(private dashboardMenuService: DashboardMenuService) {}

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
        localStorage.setItem('businessAccount', id);
    }

    ngOnInit() {
        localStorage.removeItem('businessAccount');
        this.businessAccountList();
    }
}
