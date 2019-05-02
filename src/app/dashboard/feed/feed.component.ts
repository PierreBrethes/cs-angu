import { Component, OnInit } from '@angular/core';
import { FeedService } from './feed.service';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
    constructor(private feedService: FeedService) {}
    tokenFb: string;
    businessId: string;
    feed: [];

    constructFeed(businessId, tokenFb) {
        this.feedService.getFeed(businessId, tokenFb).subscribe(result => {
            console.log('yo', result);
        });
        console.log('yooo');
    }

    ngOnInit() {
        this.tokenFb = localStorage.getItem('token');
        this.businessId = localStorage.getItem('businessAccount');
        this.constructFeed(this.businessId, this.tokenFb);
    }
}
