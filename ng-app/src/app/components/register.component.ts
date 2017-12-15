
import {Component, OnInit} from '@angular/core';
import {UserService} from '../providers/dataservice.provider'
import {NgForm} from '@angular/forms';


@Component({
    selector: 'app-register',
    templateUrl: '../views/register.component.html',
})
export class RegisterComponent implements OnInit {


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
    public user_roles:void;
    public user_teams:void;

    constructor(private service: UserService) {}

    ngOnInit(): void {

      console.log('Register component initialized');
      // Get user Roles
      this.user_roles = this.getRole();
      this.user_teams = this.getTeam();
    }

    /* Function that get all roles form db+n*/
    getRole(){
      let that = this;
      this.service.getRoles( function (data) {
        that.user_roles= data.data;
      });
    }
    /*Function for teams*/
    getTeam(){
      let that = this;
      this.service.getTeam( function (data) {
        that.user_teams= data.data;
      });

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
