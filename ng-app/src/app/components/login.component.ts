import {Component, OnInit} from '@angular/core';
import {UserService} from '../providers/dataservice.provider'
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: '../views/login.component.html',
})
export class LoginComponent implements OnInit {

    email: string;
    password: string;

    constructor(private service: UserService, private router: Router) {}

    ngOnInit(): void {
        console.log('Login component initialized');
    }

    onSubmit(form: NgForm) {
        this.service.login({email: this.email, password: this.password}, (res) => {
            if (res.data.user_id) {
                this.router.navigate(["/dashboard"]).then((res) => {
                    if (res) {
                        window.location.reload();
                    }
                });
            }
        });
    }
}
