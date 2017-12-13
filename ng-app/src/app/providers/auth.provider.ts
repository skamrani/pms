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
        console.log('Checking if user cookie exists...');
        //check is user is loged in 
        if (this.userLogedIn) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }

}