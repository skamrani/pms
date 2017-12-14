import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {CustomHttp, UserService} from './providers/dataservice.provider';


import {AppComponent} from './components/app.component';
import {HeaderComponent} from './components/header.component';
import {SidebarComponent} from './components/sidebar.component';
import {LoginComponent} from './components/login.component';
import {BlankComponent} from './components/blank.component';
import {RegisterComponent} from './components/register.component';

const appRoutes: Routes = [
    {
        path: '', component: BlankComponent
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
    providers: [CustomHttp, UserService],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        console.log('Angular app initialized');
    }
}
