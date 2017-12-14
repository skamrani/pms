
import {Component, OnInit} from '@angular/core';
import {UserService} from '../providers/dataservice.provider'
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: '../views/register.component.html',
})
export class RegisterComponent implements OnInit {

    // Roles call from db for now its static
    roles = [
        {id: 1, text: 'Employee'},
        {id: 2, text: 'TeamLead'},
        {id: 3, text: 'Admin'},
    ];
    teams = [
        {id: 1, text: 'Innovation'},
        {id: 2, text: 'Activation'},
        {id: 3, text: 'Calibration'},
        {id: 4, text: 'Web Service'},
        {id: 5, text: 'Mobile Application Development'},
        {id: 6, text: 'Document'},
        {id: 6, text: 'Quality Assurance'},
    ];

    email: string;
    username: string;
    password: string;
    team: string;
    role = [];
    constructor(private service: UserService) {}

    ngOnInit(): void {

        console.log('Register component initialized');
    }

    onSubmit(form: NgForm) {

        if (form.valid) {
            this.service.register({email: this.email, username: this.username, password: this.password, team: this.team, role: this.role}, function (data) {
                console.log(data);
            });
        } else {
            window.alert('Please enter a valid Username & Password');
        }
    }

    updateRoles(event) {
        if (event.target.checked) {
            this.role.push(event.target.value);
        } else {
            this.role.splice(this.role.indexOf(event.target.value), 1);
        }
        console.log("RoleID: ", event.target.value);
        console.log("RoleValue: ", this.role);
    }

}
