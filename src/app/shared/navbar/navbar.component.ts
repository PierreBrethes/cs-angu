import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { DataTransitService } from 'src/app/core/login/dataShareComponent/data-transit.service';
import { User } from '../models/user';
import { NavbarService } from './navbar.service';
import { FacebookLoginProvider } from 'angular-6-social-login-v2';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { isLContainer } from '@angular/core/src/render3/util';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    isLogged = false;
    facebookData: User;

    constructor(
        public location: Location,
        private router: Router,
        private dataService: DataTransitService,
        private navbarservice: NavbarService
    ) {}

    ngOnInit() {
        this.router.events.subscribe(event => {
            this.isCollapsed = true;
            if (event instanceof NavigationStart) {
                if (event.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            } else if (event instanceof NavigationEnd) {
                if (event.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                } else window.scrollTo(0, 0);
            }
        });
        this.location.subscribe((ev: PopStateEvent) => {
            this.lastPoppedUrl = ev.url;
        });

        this.facebookData = new User('', '', '', '', '');
        if (this.facebookData.name === '') {
            try {
                this.navbarservice.getMyData().subscribe(
                    json => {
                        this.facebookData.name = json.name;
                    },
                    error => {
                        localStorage.clear();
                        this.isLogged = false;
                        this.router.navigate(['/login']);
                    }
                );
            } catch (error) {
                console.log(error);
            }
        } else {
            localStorage.clear();
            this.isLogged = false;
            this.router.navigate(['/login']);
        }

        this.dataService.currentMessage.subscribe(message => {
            if (message.id !== '') {
                this.isLogged = true;
                this.facebookData = message;
            }
        });

        if (localStorage.getItem('token') !== null) {
            this.isLogged = true;
        }
    }

    logout() {
        localStorage.clear();
        this.isLogged = false;
        this.router.navigate(['/home']);
    }
}
