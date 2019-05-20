import { Component, OnInit } from '@angular/core';
import { FeedService } from './feed.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
    constructor(private feedService: FeedService) {}
    businessId: string;
    feed = [];

    constructFeed(businessId) {
        this.feedService.getFeed(businessId).subscribe(result => {
            result.forEach(element => {
                console.log(element);
                this.feed.push(element);
            });
        });
    }

    ngOnInit() {
        this.businessId = localStorage.getItem('businessAccount');
        this.constructFeed(this.businessId);
    }
}
