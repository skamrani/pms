import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {

    public userLogedIn = false;

    constructor(private router: Router, private cookie: CookieService) {
        this.userLogedIn = this.cookie.check("connect.sid");
    }

    canActivate() {
        this.userLogedIn = this.cookie.check("connect.sid");
        console.log('Checking if user cookie exists...', this.cookie.check("connect.sid"));
        //check is user is loged in 
        if (this.userLogedIn) {
            return true;
        } else {
            return false;
        }
    }

}