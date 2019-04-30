import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LandingTestComponent } from './landing-test/landing-test.component';
import { LoginComponent } from './core/login/login.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GCUComponent } from './pages/gcu/gcu.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'user-profile',
        component: ProfileComponent
    },
    { path: 'register', component: SignupComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'landing-test', component: LandingTestComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'gcu', component: GCUComponent },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
    exports: []
})
export class AppRoutingModule {}
