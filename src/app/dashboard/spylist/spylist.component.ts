import { Component, OnInit } from '@angular/core';
import { SpylistService } from './spylist.service';
import { DataTransitService } from '../../core/login/dataShareComponent/data-transit.service';

@Component({
    selector: 'app-spylist',
    templateUrl: './spylist.component.html',
    styleUrls: ['./spylist.component.css']
})
export class SpylistComponent implements OnInit {
    constructor(
        private spylistService: SpylistService,
        private dataservice: DataTransitService
    ) {}
    //
    spiedAccountList = [];
    businessId = localStorage.getItem('businessAccount');
    businessMessage = '';
    exist = false;

    getSpiedAccounts() {
        this.spylistService.getSpiedList(this.businessId).subscribe(result => {
            result.forEach(json => {
                this.spiedAccountList.push(json);
            });
        });
    }

    ngOnInit() {
        this.dataservice.currentMessage.subscribe(message => {
            if (message.id !== '') {
                this.businessMessage == message.id;
            }
        });
        this.getSpiedAccounts();
    }

    addSpiedAccount(spiedAccount) {
        this.spylistService
            .addSpiedAccount(this.businessId, spiedAccount)
            .subscribe(result => {
                if (result.status === 200) {
                    if (result.body[1] === true) {
                        this.spiedAccountList.push(result.body[0]);
                    } else {
                        this.exist = true;
                    }
                }
            });
    }

    deleteSpiedAccount(i, spiedAccount) {
        this.spylistService
            .deleteSpiedAccount(this.businessId, spiedAccount)
            .subscribe(result => {
                if (result.status === 204) {
                    this.spiedAccountList.splice(i, 1);
                }
            });
    }

    hideAlert() {
        this.exist = false;
    }
}
