import { Component, OnInit } from '@angular/core';
import { SpylistService } from './spylist.service';

@Component({
    selector: 'app-spylist',
    templateUrl: './spylist.component.html',
    styleUrls: ['./spylist.component.css']
})
export class SpylistComponent implements OnInit {
    constructor(private spylistService: SpylistService) {}
    //
    spiedAccountList = [];

    ngOnInit() {
        this.spylistService.getSpiedList();
    }

    addSpiedAccount(spiedAccount: string) {
        if (spiedAccount) {
            this.spiedAccountList.push(spiedAccount);
        }
    }
}
