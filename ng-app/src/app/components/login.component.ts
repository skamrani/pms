import {Component, OnInit} from '@angular/core';
import {UserService} from '../providers/dataservice.provider'
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: '../views/login.component.html',
})
export class LoginComponent implements OnInit {

    username: string;
    password: string;

    constructor(private service: UserService) {}

    ngOnInit(): void {
        console.log('Login component initialized');
    }


    onSubmit(form: NgForm) {
        if (form.valid) {
            console.log('Submiting form...');
            this.service.login({username: this.username, password: this.password}, function (data) {
                console.log(data);
            });

        } else {
            window.alert('Please enter a valid Username & Password');

        }
    }
}
