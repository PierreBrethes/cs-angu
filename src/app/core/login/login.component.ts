import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../../shared/models/user';

import {
    AuthService,
    FacebookLoginProvider,
    GoogleLoginProvider,
    VkontakteLoginProvider
} from 'angular-6-social-login-v2';
import { Router } from '@angular/router';
import { DataTransitService } from '../login/dataShareComponent/data-transit.service';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(
        private socialAuthService: AuthService,
        private router: Router,
        private dataservice: DataTransitService,
        private loginservice: LoginService
    ) {}

    message: User;

    public socialSignIn(socialPlatform: string) {
        let socialPlatformProvider;
        if (socialPlatform == 'facebook') {
            socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
        }

        this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
            // Now sign-in with userData
            // ...
            if (userData) {
                let userFb = new User(
                    userData.id,
                    userData.name,
                    userData.email,
                    userData.token,
                    userData.image
                );

                this.loginservice
                    .findOrCreateAPI(
                        userData.id,
                        userData.name,
                        userData.email,
                        userData.token,
                        userData.image
                    )
                    .subscribe(resp => {
                        localStorage.setItem('userJWT', resp.body.userJWT);
                    });

                localStorage.setItem('token', userData.token);
                // localStorage.setItem('userId', userFb.id);
                this.dataservice.sendFbData(userFb);
                this.router.navigate(['/home']);
            }
        });
    }

    ngOnInit() {}
}
