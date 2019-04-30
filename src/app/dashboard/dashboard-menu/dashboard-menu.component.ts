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
                result.data.forEach(json => {
                    if (json.hasOwnProperty('instagram_business_account')) {
                        let object = {
                            id: json.instagram_business_account.id,
                            name: json.name
                        };

                        this.accountList.push(object);
                    }
                });
            });
        console.log(this.accountList);
    }

    setBusinessAccount(id: string) {
        localStorage.setItem('businessAccount', id);
    }

    ngOnInit() {
        localStorage.removeItem('businessAccount');
        this.businessAccountList();
    }
}
