import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './shared/models/interceptor';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './pages/home/home.module';
import { LoginComponent } from './core/login/login.component';
import { LandingTestComponent } from './landing-test/landing-test.component';
import { RegisterComponent } from './core/register/register.component';
import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
    LinkedinLoginProvider,
    VkontakteLoginProvider
} from 'angular-6-social-login-v2';
import { DataTransitService } from './core/login/dataShareComponent/data-transit.service';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GCUComponent } from './pages/gcu/gcu.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardMenuComponent } from './dashboard/dashboard-menu/dashboard-menu.component';
import { DashboardModule } from './dashboard/dashboard.module';

export function getAuthServiceConfigs() {
    let config = new AuthServiceConfig([
        {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('578189005964062')
        },
        {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('Your-Google-Client-Id')
        }
    ]);
    return config;
}

@NgModule({
    declarations: [
        AppComponent,
        SignupComponent,
        LandingComponent,
        ProfileComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        LandingTestComponent,
        RegisterComponent,
        AboutUsComponent,
        GCUComponent
    ],
    imports: [
        BrowserModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        SocialLoginModule,
        HomeModule,
        HttpClientModule,
        DashboardModule
    ],
    providers: [
        {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfigs
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: Interceptor,
            multi: true
        },
        DataTransitService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
