import {Component, OnInit} from '@angular/core';
import {AuthGuard} from '../providers/auth.provider';

@Component({
    selector: 'app-root',
    templateUrl: '../views/app.component.html',
})
export class AppComponent implements OnInit {

    public userLogedIn;

    ngOnInit(): void {
        console.log('App component initialized');
        this.userLogedIn = this.authGaurd.userLogedIn;
    }

    constructor(private authGaurd: AuthGuard) {}

}
