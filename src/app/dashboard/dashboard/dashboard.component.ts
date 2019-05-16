import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Location, PopStateEvent } from '@angular/common';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    closeResult: string;
    active = true;

    constructor(private modalService: NgbModal, private router: Router) {}

    ngOnInit() {
        if (localStorage.getItem('businessAccount')) {
            this.active = false;
            this.router.navigate(['/dashboard/feed']);
        }
    }
}
