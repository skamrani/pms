import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';


import {CustomHttp, UserService} from './providers/dataservice.provider';
import {AuthGuard} from './providers/auth.provider';


import {AppComponent} from './components/app.component';
import {HeaderComponent} from './components/header.component';
import {SidebarComponent} from './components/sidebar.component';
import {LoginComponent} from './components/login.component';
import {BlankComponent} from './components/blank.component';

import {RegisterComponent} from './components/register.component';

import {DashboardComponent} from './components/dashboard.component';


const appRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {

        path: 'login', component: LoginComponent

    },
    {
        path: 'register', component: RegisterComponent




    }
];

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HeaderComponent,
        SidebarComponent,
        LoginComponent,
        BlankComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: false} // <-- debugging purposes only
        )
    ],
    providers: [CustomHttp, UserService, AuthGuard, CookieService],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        console.log('Angular app initialized');
    }
}
