import {Component, OnInit} from '@angular/core';
import {UserService} from '../providers/dataservice.provider'
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
    selector: 'app-login',
    templateUrl: '../views/login.component.html',
})
export class LoginComponent implements OnInit {

    username: string;
    password: string;

    constructor(private service: UserService, private router: Router, private cookie: CookieService) {}

    ngOnInit(): void {
        console.log('Login component initialized');
        console.log('Log out...');
        this.service.logout((res) => {
            this.cookie.deleteAll();
            console.log(res);
        });
    }

    onSubmit(form: NgForm) {
        this.service.login({username: this.username, password: this.password}, (res) => {
            if (res.data.user_id) {
                this.router.navigate(["dashboard"]);
            }
        });
    }
}
