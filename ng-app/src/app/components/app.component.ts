import {Component} from '@angular/core';
import {AuthGuard} from '../providers/auth.provider';

@Component({
    selector: 'app-root',
    templateUrl: '../views/app.component.html',
})
export class AppComponent {

    public userLogedIn;

    constructor(private authGaurd: AuthGuard) {
        this.userLogedIn = this.authGaurd.userLogedIn;
    }
}
